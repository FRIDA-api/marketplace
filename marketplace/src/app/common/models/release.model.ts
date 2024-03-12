export interface ReleaseModel {
  url: string;
  assetsUrl: string;
  id: number;
  tagName: string;
  name: string;
  publishedAt: string;
  assets: AssetModel[];
}

export interface AssetModel {
  url: string;
  id: number;
  content_type: string;
}
