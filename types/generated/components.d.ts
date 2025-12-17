import type { Schema, Struct } from '@strapi/strapi';

export interface CarAvailability extends Struct.ComponentSchema {
  collectionName: 'components_car_availabilities';
  info: {
    displayName: 'availability';
  };
  attributes: {
    availableFrom: Schema.Attribute.Date;
    isAvailable: Schema.Attribute.Boolean;
  };
}

export interface CarDocuments extends Struct.ComponentSchema {
  collectionName: 'components_car_documents';
  info: {
    displayName: 'documents';
  };
  attributes: {
    fitnessCertificate: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    insurance: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    puc: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    rcBook: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CarFeatures extends Struct.ComponentSchema {
  collectionName: 'components_car_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    abs: Schema.Attribute.Boolean;
    airbags: Schema.Attribute.Integer;
    airConditioner: Schema.Attribute.Boolean;
    bluetooth: Schema.Attribute.Boolean;
    gpsNavigation: Schema.Attribute.Boolean;
    musicSystem: Schema.Attribute.Boolean;
    powerSteering: Schema.Attribute.Boolean;
    rearCamera: Schema.Attribute.Boolean;
    sunroof: Schema.Attribute.Boolean;
    usbPort: Schema.Attribute.Boolean;
  };
}

export interface CarImages extends Struct.ComponentSchema {
  collectionName: 'components_car_images';
  info: {
    displayName: 'images';
    icon: 'picture';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface CarLocation extends Struct.ComponentSchema {
  collectionName: 'components_car_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    city: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Nagpur'>;
    pickupAddress: Schema.Attribute.String;
    state: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Maharashtra'>;
  };
}

export interface CarRentalDetails extends Struct.ComponentSchema {
  collectionName: 'components_car_rental_details';
  info: {
    displayName: 'rentalDetails';
  };
  attributes: {
    available: Schema.Attribute.Boolean;
    location: Schema.Attribute.Component<'car.location', false>;
    minimumBookingHours: Schema.Attribute.Integer;
    pricePerDay: Schema.Attribute.Integer;
    pricePerHour: Schema.Attribute.Integer;
  };
}

export interface CarRentalPolicy extends Struct.ComponentSchema {
  collectionName: 'components_car_rental_policies';
  info: {
    displayName: 'rentalPolicy';
  };
  attributes: {
    fuelPolicy: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'full to full'>;
    lateReturnChargesPerHour: Schema.Attribute.Integer;
    securityDeposit: Schema.Attribute.Integer;
  };
}

export interface CarReviews extends Struct.ComponentSchema {
  collectionName: 'components_car_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    comment: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'car.availability': CarAvailability;
      'car.documents': CarDocuments;
      'car.features': CarFeatures;
      'car.images': CarImages;
      'car.location': CarLocation;
      'car.rental-details': CarRentalDetails;
      'car.rental-policy': CarRentalPolicy;
      'car.reviews': CarReviews;
    }
  }
}
