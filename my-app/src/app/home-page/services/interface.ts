// export interface User {
//   display_name: string,
//   id: string
// }



export interface User {
  country?: string,
  display_name: string,
  email?: string,
  explicit_content?: Exp,
  external_urls?: Ext,
  followers: Followers,
  href: string,
  id: string,
  images: Images[],
  product?: string,
  type?: string,
  uri?: string
}

interface Images {
  height?: number,
  url: string,
  width?: number
}

interface Followers {
  href?: string,
  total: 0
}

interface Ext {
  spotify: string
}

interface Exp {
  filter_enabled?: boolean,
  filter_locked?: boolean
}
