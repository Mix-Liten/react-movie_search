import React from 'react'
import { S } from './style'

const Loading = () => {
  return (
    <S.Loading>
      <S.LoadingItem delay={1}>L</S.LoadingItem>
      <S.LoadingItem delay={2}>o</S.LoadingItem>
      <S.LoadingItem delay={3}>a</S.LoadingItem>
      <S.LoadingItem delay={4}>d</S.LoadingItem>
      <S.LoadingItem delay={5}>i</S.LoadingItem>
      <S.LoadingItem delay={6}>n</S.LoadingItem>
      <S.LoadingItem delay={7}>g</S.LoadingItem>
      <S.LoadingItem delay={8}>.</S.LoadingItem>
      <S.LoadingItem delay={9}>.</S.LoadingItem>
      <S.LoadingItem delay={10}>.</S.LoadingItem>
    </S.Loading>
  )
}

export default Loading
