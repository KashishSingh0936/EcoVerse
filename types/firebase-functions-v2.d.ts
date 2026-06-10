declare module "firebase-functions/v2/auth" {
  export const onUserCreated: any
  export const onUserDeleted: any
}

declare module "firebase-functions/v2/firestore" {
  export const onDocumentCreated: any
  export const onDocumentUpdated: any
  export const onDocumentDeleted: any
}

declare module "firebase-functions/v2" {
  // Generic fallback
  export const https: any
}
