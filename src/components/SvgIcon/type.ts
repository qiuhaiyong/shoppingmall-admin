export type NameDefinition =
  | 'copyright'
  | 'exit-full'
  | 'full-screen'
  | 'home'
  | 'loading'
  | 'lock'
  | 'logo'
  | 'logout'
  | 'phone'
  | 'refresh'
  | 'welcome'

export interface SvgIconProps {
  // xlink:href 属性前缀
  prefix?: string
  // 使用图标的名称
  name: NameDefinition
  // 颜色
  color?: string
  // 宽度
  width?: string | number
  // 高度
  height?: string | number
}
