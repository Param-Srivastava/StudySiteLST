# StudySiteLST

# Land Surface Temperature (LST) and Air Temperature Prediction using Google Earth Engine 🌍📈

## Overview

This project leverages Google Earth Engine (GEE) to obtain Land Surface Temperature (LST) bands and Land Use Land Cover (LULC) classifications for the years 1999, 2009, and 2019 using LandSat satellite data. Additionally, elevation data from the Shuttle Radar Topography Mission (SRTM) and weather station data for air temperature calculations were used. A regression analysis and an Artificial Neural Network (ANN) model were trained to predict air temperature for the study site.

## Features

- **Google Earth Engine Integration**: Efficiently extract and process LST and LULC data.
- **Temporal Analysis**: Study data from three distinct years (1999, 2009, 2019) for comprehensive temporal analysis.
- **LandSat Satellite Data**: Utilize high-resolution LandSat data for accurate LST and LULC extraction.
- **SRTM Data**: Incorporate SRTM elevation data for enhanced model accuracy.
- **Weather Station Data**: Leverage ground-truth weather station data for precise air temperature calculations.
- **Machine Learning Models**: Train regression analysis and ANN models to predict air temperature.

## Data Sources

- **LandSat Satellite Data**: Used for extracting LST and LULC classifications.
- **SRTM Data**: Provides elevation information for the study area.
- **Weather Station Data**: Used for air temperature calculations and model training.

## Methodology

1. **Data Collection**:

   - Extract LST and LULC data for 1999, 2009, and 2019 from Google Earth Engine.
   - Obtain elevation data from the SRTM dataset.
   - Collect air temperature data from local weather stations.

2. **Data Processing**:

   - Process the satellite data to retrieve LST and LULC classifications.
   - Integrate elevation data to enhance the feature set for the models.

3. **Model Training**:

   - Train a regression analysis model using the processed data.
   - Develop an Artificial Neural Network (ANN) model for air temperature prediction.

4. **Prediction**:
   - Use the trained models to predict air temperature for the study site.
   - Validate the model predictions against actual weather station data.

## Results

The models demonstrated a high level of accuracy in predicting air temperature based on LST, LULC, and elevation data, showcasing the potential of integrating remote sensing data with machine learning techniques for environmental analysis.

## Usage

To replicate the study or use the models, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Param-Srivastava/StudySiteLST.git

   ```

2. Make changes to the **predictairtemp.ipynb** notebook.

3. Open a pull request for any changes and bug fixes.

**Author**- [Param Srivastava](https://github.com/Param-Srivastava)
