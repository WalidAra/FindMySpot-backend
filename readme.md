# Find My Spot Parking Lots Backend API Documentation

Welcome to the Find My Spot Parking Lots backend API documentation! This document provides an overview of the available endpoints and their functionalities.

## Base URL

The base URL for all API endpoints is: `https://api.findmyspot.com`

## Authentication

Currently, the API does not require authentication for accessing public endpoints. However, certain endpoints may require authentication for specific functionalities, which will be mentioned in their respective sections.

## Endpoints

### 1. Search Parking Lots

#### Endpoint

- **GET** `/api/parking-lots`

#### Description

This endpoint allows users to search for parking lots based on various parameters such as location, availability, price, etc.

#### Query Parameters

- `location` (optional): The location to search for parking lots (e.g., city name, latitude and longitude).
- `radius` (optional): The search radius in meters from the specified location.
- `availability` (optional): Filter parking lots by availability (e.g., open now, available spots).
- `price_range` (optional): Filter parking lots by price range.

#### Example


### 2. Reserve Parking Spot

#### Endpoint

- **POST** `/api/reserve-spot`

#### Description

This endpoint allows users to reserve a parking spot.

#### Request Body

- `parking_lot_id`: The ID of the parking lot.
- `user_id`: The ID of the user reserving the spot.
- `start_time`: The start time of the reservation.
- `end_time`: The end time of the reservation.

#### Example


### 3. Get Reserved Spots

#### Endpoint

- **GET** `/api/reserved-spots`

#### Description

This endpoint allows users to retrieve their reserved parking spots.

#### Query Parameters

- `user_id`: The ID of the user whose reserved spots are to be retrieved.

#### Example


### 3. Get Reserved Spots

#### Endpoint

- **GET** `/api/reserved-spots`

#### Description

This endpoint allows users to retrieve their reserved parking spots.

#### Query Parameters

- `user_id`: The ID of the user whose reserved spots are to be retrieved.

#### Example

