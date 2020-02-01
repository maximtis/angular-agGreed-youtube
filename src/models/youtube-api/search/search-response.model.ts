interface SearchResponseModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: SearchResponsePageInfoModel;
  items: SearchItemModel[];
}
