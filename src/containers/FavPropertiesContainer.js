import React, { useContext } from "react";
import { PropertiesContext } from "../context/propertiesContext";
import { FavButton } from "../components/FavButton";
import {
  RightSideBar,
  PropertySecrionSmall,
  SubTitleText,
  ColumnCenterSpaceAround,
  MainText,
  LightText
} from "../components/wrappers";

import { CloseButton } from "../components/Buttons";
import { ImageSmallComponent } from "../components/ImageComponent";
import { kFormatter } from "../helpers/calcHelpers";

const FavPropertyContainer = () => {
  const context = useContext(PropertiesContext);
  const properties = context.favProperties;
  const isListOpen = context.isDialogOpen;
  const toggleDialog = context.toggleDialog;
  const changeFavProperties = context.toggleFav;
  const favPropsNumber = context.favProperties.length;
  const isFavProperties = favPropsNumber > 0;

  return (
    <RightSideBar>
      <FavButton
        onClick={toggleDialog}
        isFavProperties={isFavProperties}
        favPropsNumber={favPropsNumber}
        isListOpen={isListOpen}
      />
      {isListOpen && (
        <section>
          {properties.length < 1 && (
            <PropertySecrionSmall>
              <LightText>Your favourite properties will appear here</LightText>
            </PropertySecrionSmall>
          )}
          {properties &&
            properties.map(property => (
              <PropertySecrionSmall>
                <ImageSmallComponent
                  src={property.propertyPhoto}
                  alt={property.buildingName}
                />
                <ColumnCenterSpaceAround>
                  <SubTitleText>{property.buildingName}</SubTitleText>
                  <MainText>{kFormatter(property.salePrice)}</MainText>
                </ColumnCenterSpaceAround>

                <CloseButton onClick={() => changeFavProperties(property.id)} />
              </PropertySecrionSmall>
            ))}
        </section>
      )}
    </RightSideBar>
  );
};

export default FavPropertyContainer;
