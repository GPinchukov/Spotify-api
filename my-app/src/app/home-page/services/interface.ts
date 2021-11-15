
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
export interface PlaylistsBox {
  href: string,
  items: Playlists[]
  limit: number,
  next: string,
  offset: number,
  previous?: string;
  total: number,
}
export interface AlbumBox {
  href: string,
  items: Album[]
  limit: number,
  next: string,
  offset: number,
  previous?: string;
  total: number,
}
export interface Playlists {
  collaborative?: boolean,
  description?: string,
  external_urls?: Ext,
  href?: string,
  id: string,
  images: Images[],
  name: string,
  owner: Owner,
  primary_color?: string,
  public?: boolean,
  snapshot_id?: string,
  tracks: Tracks,
  type?: string,
  uri?: string
}

interface Owner {
  display_name: string,
  external_urls: Ext,
  href: string,
  id: string,
  type: string,
  uri: string,
}

interface Tracks {
  href: string,
  total: number
}




  export interface ExternalUrls {
    spotify: string;
  }

  export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface Copyright {
    text: string;
    type: string;
  }

  export interface ExternalIds {
    upc: string;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Image {
    height: number;
    url: string;
    width: number;
  }

  export interface ExternalUrls3 {
    spotify: string;
  }

  export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }

  export interface ExternalUrls4 {
    spotify: string;
  }

  export interface Item2 {
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }

  export interface Tracks2 {
    href: string;
    items: Item2[];
    limit: number;
    next?: any;
    offset: number;
    previous?: string,
    total: number;
  }

  export interface AlbumBox {
    added_at: string,
    href: string,
    album: Album[],
    limit: number,
    next: string,
    offset: number,
    previous?: string,
    total: number
  }
  export interface PlaylistCard{
    collaborative: boolean;
    description: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color?: string;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
  }
  export interface Album {
    album_type?: string;
    artists: Artist[];
    available_markets?: string[];
    copyrights?: Copyright[];
    external_ids?: ExternalIds;
    external_urls?: ExternalUrls2;
    genres?:  string[];
    href: string;
    id: string;
    images: Image[];
    label?: string;
    name: string;
    popularity?: number;
    release_date?: string;
    release_date_precision?: string;
    total_tracks?: number;
    tracks: Tracks2;
    type: string;
    uri: string;
    description: string;
  }

  export interface Item {
    added_at: Date;
    album: Album;
  }

  export interface RootObject {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
  }



