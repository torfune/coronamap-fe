import styled from 'styled-components'
import { Z_INDEX } from '../constants'
import { FC } from 'react'
import ModalData from '../types/ModalData'
import Backdrop from './Backdrop'

interface Props {
  data: ModalData
  onClose: () => void
}
const Modal: FC<Props> = ({ data: { title, value }, onClose }) => {
  return (
    <>
      <Container>
        <CrossButton onClick={onClose}>
          <img src="/icons/cross.svg" />
        </CrossButton>

        <h3>{title}</h3>
        <Value>{value}</Value>
        <p>CONFIRMED CASES</p>

        <PrimaryButton onClick={onClose}>CLOSE</PrimaryButton>
      </Container>

      <Backdrop onClick={onClose} />
    </>
  )
}

const Container = styled.div`
  position: fixed;
  top: 128px;
  background: #fff;
  border-radius: 8px;
  width: 300px;
  padding: 32px 16px;
  left: calc(50vw - 150px);
  box-shadow: 2px 2px 64px #00000044;
  text-align: center;
  z-index: ${Z_INDEX.MODAL};

  > h3 {
    color: #222;
    font-size: 22px;
  }

  > p:last-child {
    color: #888;
    letter-spacing: 1px;
    font-size: 14px;
    margin-top: 8px;
  }
`
const Value = styled.p`
  margin-top: 16px;
  color: #000;
  font-size: 48px;
  line-height: 48px;
  font-weight: 700;
`
const CrossButton = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;

  > img {
    height: 16px;
    position: relative;
    top: 12px;
    right: 12px;
    opacity: 0.5;
  }

  :hover {
    > img {
      opacity: 1;
    }
  }
`
const PrimaryButton = styled.div`
  width: 200px;
  margin: 0 auto;
  margin-top: 8px;
  background: #aaa;
  border-radius: 4px;
  padding: 8px 16px;
  transition: 150ms;
  user-select: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;

  :hover {
    background: #999;
  }

  :active {
    background: #888;
  }
`

export default Modal
