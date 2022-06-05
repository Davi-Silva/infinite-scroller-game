export type GetPositionInObjectType = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};

export type GetDimensionsInObjectType = {
  height: number;
  width: number;
};

export type AssetStatsType = {
  pos: GetPositionInObjectType;
  dimensions: GetDimensionsInObjectType;
};
