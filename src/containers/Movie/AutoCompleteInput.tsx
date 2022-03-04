import { FC, KeyboardEvent, ChangeEvent, useState, memo, useRef } from 'react'
import { fetchMovieList } from './API'
import { useClickAway, useDebounce } from '../../hooks'
import { ACS } from './style'

const replaceMarked = (text: string, paragraph: string) => {
  const markedText = <strong>{text}</strong>
  return (
    <>
      {text.toUpperCase() === paragraph.substring(0, text.length).toUpperCase() ? (
        <ACS.Text>
          {markedText}
          {paragraph.slice(text.length)}
        </ACS.Text>
      ) : (
        <ACS.Text>{paragraph}</ACS.Text>
      )}
    </>
  )
}

interface AutoCompleteProps {
  name: string
  placeholderText: string
  onSearch(searchText: string): Promise<void>
}

const AutoComplete: FC<AutoCompleteProps> = ({ name, placeholderText, onSearch }) => {
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isShow, setIsShow] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useClickAway(inputRef, (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.dataset?.keep) return
    setIsShow(false)
    setActiveIndex(-1)
  })

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (activeIndex > -1) {
        setSearchText(suggestions[activeIndex])
      }
    }
  }

  const onKeyUp = async (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      let newActiveIndex = activeIndex - 1
      if (newActiveIndex < 0) newActiveIndex = suggestions.length - 1
      setActiveIndex(newActiveIndex)
    } else if (e.key === 'ArrowDown') {
      let newActiveIndex = activeIndex + 1
      if (newActiveIndex >= suggestions.length) newActiveIndex = 0
      setActiveIndex(newActiveIndex)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      setIsShow(false)
      setSuggestions([])
      if (activeIndex === -1) {
        await onSearch(searchText)
        return
      } else {
        await onSearch(suggestions[activeIndex])
      }
      setActiveIndex(-1)
    }
  }

  const onChange = (e: ChangeEvent) => {
    const target = e.target as typeof e.target & {
      value: string
    }
    setSearchText(target.value)
  }

  useDebounce(
    async () => {
      if (!searchText || searchText.length > 10 || searchText.length < 4) return
      const [movies] = await fetchMovieList(searchText.trim())
      if (!movies?.length) return
      const movieNameList = movies
        .map(movie => movie?.Title)
        .filter(title => title.substring(0, searchText.length).toUpperCase() === searchText.toUpperCase())
        .filter((title, i, arr) => arr.indexOf(title, 0) === i)
      setSuggestions(movieNameList)
      setIsShow(true)
    },
    400,
    [searchText]
  )

  const onMouseOver = (i: number) => {
    setActiveIndex(i)
  }

  const onClick = (suggestion: string) => {
    setSearchText(suggestion)
    setSuggestions([])
  }

  return (
    <ACS.Wrapper>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        name={name}
        placeholder={placeholderText}
        value={searchText}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        ref={inputRef}
      />
      {isShow && (
        <ACS.List>
          {suggestions.map((suggestion, i) =>
            activeIndex === i ? (
              <ACS.ActiveItem
                data-keep
                key={`${suggestion}-${i}`}
                onClick={() => onClick(suggestion)}
                onTouchStart={() => onClick(suggestion)}
              >
                {replaceMarked(searchText, suggestion)}
              </ACS.ActiveItem>
            ) : (
              <ACS.Item
                key={`${suggestion}-${i}`}
                onMouseOver={() => onMouseOver(i)}
                onTouchStart={() => onClick(suggestion)}
              >
                {replaceMarked(searchText, suggestion)}
              </ACS.Item>
            )
          )}
        </ACS.List>
      )}
    </ACS.Wrapper>
  )
}

export default memo(AutoComplete)
