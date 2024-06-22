/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = ee.FeatureCollection("projects/ee-paramsrivastavaciv21/assets/Study_Site");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Load a Digital Elevation Model (DEM) derived from SRTM data
var dem = ee.Image('USGS/SRTMGL1_003');
// Calculate slope from DEM data
var slope = ee.Terrain.slope(dem);

// Clip the slope layer to the geometry of the shapefile
var slopeInROI = slope.clip(roi);

// Visualize the slope within the region of interest
Map.addLayer(slopeInROI, {min: 1, max: 7, palette: ['green', 'blue', 'yellow', 'black']}, 'Slope (Clipped to ROI)');

// Center the map on the ROI
Map.centerObject(roi, 10);

// Print the slope statistics within the region of interest
var stats = slopeInROI.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: roi,
  scale: 30, // Adjust the scale as needed
  maxPixels: 1e9
});

print('Mean Slope:', stats.get('slope'));

// Export the slope image to Google Drive
Export.image.toDrive({
  image: slopeInROI,
  description: 'Slope_Image',
  scale: 30, // Adjust the scale as needed
  region: roi
});