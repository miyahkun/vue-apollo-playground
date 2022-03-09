/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHero
// ====================================================

export interface GetHero_hero {
  __typename: "Human" | "Droid";
  /**
   * The name of the character
   */
  name: string;
}

export interface GetHero {
  hero: GetHero_hero | null;
}
