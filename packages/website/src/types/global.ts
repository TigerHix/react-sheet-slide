import { Items, SetItems } from 'components/sortable'

export type Trinary = 'on' | 'off' | 'auto'

export type FormProps = {
  scrollingExpands: boolean
  useDarkMode: Trinary
  useModal: Trinary
  detents: Items
}
