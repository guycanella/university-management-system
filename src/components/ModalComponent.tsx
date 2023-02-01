import { PropsWithChildren } from 'react'

type ModalProps = PropsWithChildren<{
  open: boolean
  onClose?: () => void
  className?: string
}>

export const Modal = ({
  children,
  open,
  onClose,
  className = ''
}: ModalProps) => {
  return (
    <>
      <div
        aria-hidden="true"
        className={`modal-background ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        } fixed bg-black bg-opacity-40 w-screen h-screen inset-0 z-20 transition-all ease delay-100`}
        onClick={() => {
          if (onClose) {
            onClose()
          }
        }}
      />
      <div
        className={`modal-content ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        } ${className} fixed rounded-lg p-10 min-w-[20px] min-h-[20px] max-w-max max-h-max bg-white z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ease delay-100`}
      >
        {children}
      </div>
    </>
  )
}
