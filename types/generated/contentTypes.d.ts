import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    status: Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Attribute.Required;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    phone: Attribute.BigInteger;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    member_id: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::member.member'
    >;
    background_verification: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'api::background-verification.background-verification'
    >;
    checklist_organizers: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::checklist-organizer.checklist-organizer'
    >;
    faqs: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::faq.faq'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBackgroundVerificationBackgroundVerification
  extends Schema.CollectionType {
  collectionName: 'background_verifications';
  info: {
    singularName: 'background-verification';
    pluralName: 'background-verifications';
    displayName: 'background verification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::background-verification.background-verification',
      'oneToOne',
      'api::member.member'
    >;
    verification_type: Attribute.Enumeration<
      ['Id', 'photo', 'education', 'employment']
    >;
    verified_by: Attribute.Enumeration<['Admin']>;
    verified_at: Attribute.Date;
    details: Attribute.String;
    verification_document: Attribute.Relation<
      'api::background-verification.background-verification',
      'oneToOne',
      'api::verification-document.verification-document'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::background-verification.background-verification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::background-verification.background-verification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBlockBlock extends Schema.CollectionType {
  collectionName: 'blocks';
  info: {
    singularName: 'block';
    pluralName: 'blocks';
    displayName: 'block';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blocked_by: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'api::member.member'
    >;
    blocked_profile: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'api::member.member'
    >;
    status: Attribute.Enumeration<['block', 'unblock']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::block.block',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBudgetCalculatorBudgetCalculator
  extends Schema.CollectionType {
  collectionName: 'budget_calculators';
  info: {
    singularName: 'budget-calculator';
    pluralName: 'budget-calculators';
    displayName: 'budget calculator';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    item: Attribute.String;
    estimated_cost: Attribute.Float;
    actual_cost: Attribute.Float;
    notes: Attribute.String;
    member: Attribute.Relation<
      'api::budget-calculator.budget-calculator',
      'manyToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::budget-calculator.budget-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::budget-calculator.budget-calculator',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChecklistOrganizerChecklistOrganizer
  extends Schema.CollectionType {
  collectionName: 'checklist_organizers';
  info: {
    singularName: 'checklist-organizer';
    pluralName: 'checklist-organizers';
    displayName: 'checklist organizer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    completed: Attribute.Boolean;
    due_date: Attribute.Date;
    member: Attribute.Relation<
      'api::checklist-organizer.checklist-organizer',
      'manyToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::checklist-organizer.checklist-organizer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::checklist-organizer.checklist-organizer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommunityCommentCommunityComment
  extends Schema.CollectionType {
  collectionName: 'community_comments';
  info: {
    singularName: 'community-comment';
    pluralName: 'community-comments';
    displayName: 'community comment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::community-comment.community-comment',
      'oneToOne',
      'api::member.member'
    >;
    comments: Attribute.Text;
    createdat: Attribute.Date;
    post: Attribute.Relation<
      'api::community-comment.community-comment',
      'manyToOne',
      'api::community-post.community-post'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::community-comment.community-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::community-comment.community-comment',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCommunityPostCommunityPost extends Schema.CollectionType {
  collectionName: 'community_posts';
  info: {
    singularName: 'community-post';
    pluralName: 'community-posts';
    displayName: 'community post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::community-post.community-post',
      'oneToOne',
      'api::member.member'
    >;
    title: Attribute.String;
    content: Attribute.Text;
    create_at: Attribute.DateTime;
    update_at: Attribute.DateTime;
    community_comments: Attribute.Relation<
      'api::community-post.community-post',
      'oneToMany',
      'api::community-comment.community-comment'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::community-post.community-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::community-post.community-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEducationInfoEducationInfo extends Schema.CollectionType {
  collectionName: 'education_infos';
  info: {
    singularName: 'education-info';
    pluralName: 'education-infos';
    displayName: 'education info';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    education_institution: Attribute.String;
    profession: Attribute.Enumeration<
      [
        'information technology ',
        'Software developer',
        'systems analyst',
        'it consultant',
        'network administrator',
        'database administrator',
        'web developer',
        'data scientist',
        'cybersecurity specialist',
        'cloud architect',
        'it support specialist',
        'engineering',
        'civil engineer',
        'mechanical engineer',
        'electrical engineer',
        'chemical engineer',
        'aerospace engineer',
        'environmental engineer',
        'industrial engineer',
        'biomedical engineer',
        'structural engineer',
        'healthcare',
        'doctor',
        'nurse',
        'pharmacist',
        'dentist',
        'surgeon',
        'physiotherapist',
        'occupational therapist',
        'radiologist',
        'medical laboratory technician',
        'healthcare administrator',
        'finance and accounting',
        'accountant',
        'auditor',
        'financial analyst',
        'investment banker',
        'tax advisor',
        'financial planner',
        'insurance agent',
        'credit analyst',
        'budget analyst',
        'treasury analyst',
        'education',
        'teacher',
        'professor',
        'school administrator',
        'educational consultant',
        'special education teacher',
        'curriculum developer',
        'tutor',
        'researcher',
        'librarian',
        'academic advisor',
        'legal',
        'lawyer',
        'paralegal',
        'judge',
        'legal secretary',
        'legal consultant',
        'corporate counsel',
        'public defender',
        'legal analyst',
        'notary',
        'mediator',
        'business and management',
        'business analyst',
        'marketing manager',
        'sales manager',
        'human resources manager',
        'operations manager',
        'product manager',
        'project manager',
        'management consultant',
        'business development manager',
        'entrepreneur',
        'arts and entertainment',
        'actor',
        'musician',
        'dancer',
        'writer',
        'director',
        'producer',
        'visual artist',
        'photographer',
        'graphic designer',
        'animator',
        'science and research',
        'biologist',
        'chemist',
        'physicist',
        'environmental scientist',
        'research scientist',
        'mathematician',
        'statistician',
        'geologist',
        'astronomer',
        'medical researcher',
        'trades and vocational',
        'electrician',
        'plumber',
        'carpenter',
        'mechanic',
        'welder',
        'machinist',
        'construction worker',
        'chef',
        'hairstylist',
        'hospitality and tourism',
        'hotel manager',
        'travel agent',
        'tour guide',
        'event planner',
        'restaurant manager',
        'bartender',
        'concierge',
        'housekeeper',
        'cruise director',
        'media and communication',
        'journalist',
        'editor',
        'public relations specialist',
        'advertising executive',
        'broadcast technician',
        'social media manager',
        'content writer',
        'copywriter',
        'translator',
        'public speaker',
        'public service and government',
        'police officer',
        'firefighter',
        'social worker',
        'politician',
        'public health worker',
        'urban planner',
        'environmental protection officer',
        'military personnel',
        'postal worker',
        'diplomat',
        'sales representative',
        'marketing coordinator',
        'brand manager',
        'market research analyst',
        'digital marketing specialist',
        'retail manager',
        'transportation and logistics',
        'truck driver',
        'pilot',
        'logistics coordinator',
        'supply chain manager',
        'shipping and receiving clerk',
        'warehouse manager',
        'delivery driver',
        'freight forwarder',
        'air traffic controller'
      ]
    >;
    company_name: Attribute.String;
    job_details: Attribute.String;
    profession_type: Attribute.Enumeration<
      ['Full Time', 'Part Time', 'Apprentice', 'Trainee', 'Intern']
    >;
    annual_income: Attribute.Enumeration<
      [
        'Zero to One Lakh',
        'One to Two Lakh',
        'Two to Three Lakh',
        'Three to Four Lakh',
        'Four to Five Lakh',
        'Five to Six Lakh',
        'Six to Seven Lakh',
        'Seven to Eight Lakh',
        'Eight to Nine Lakh',
        'Nine to Ten Lakh',
        'Ten to Fifteen Lakh',
        'Fifteen to Twenty Lakh',
        'Twenty to Twenty-Five Lakh',
        'Twenty-Five to Thirty Lakh',
        'Thirty to Forty Lakh',
        'Forty to Fifty Lakh',
        'Fifty to Sixty Lakh',
        'Sixty to Seventy Lakh',
        'Seventy to Eighty Lakh',
        'Eighty to Ninety Lakh',
        'Ninety Lakh to One Crore',
        'One Crore and above'
      ]
    >;
    member_id: Attribute.Relation<
      'api::education-info.education-info',
      'oneToOne',
      'api::member.member'
    >;
    education: Attribute.Enumeration<
      [
        'High School',
        'General High School',
        'Higher Secondary',
        'Vocational Training',
        'Technical Training',
        'Trade Certification',
        'Apprenticeship Programs',
        'Diploma',
        'Arts Diploma',
        'Science Diploma',
        'Commerce Diploma',
        'Engineering Diploma',
        'Technology Diploma',
        'Associate Degree',
        'Associate of Arts (AA)',
        'Associate of Science (AS)',
        'Associate of Applied Science (AAS)',
        "Bachelor's Degree",
        'Bachelor of Arts (BA)',
        'BA in History',
        'BA in English',
        'BA in Psychology',
        'Bachelor of Science (BSc)',
        'BSc in Biology',
        'BSc in Physics',
        'BSc in Chemistry',
        'Bsc in ComputerScience',
        'Bachelor of Commerce (BCom)',
        'BCom in Accounting',
        'BCom in Finance',
        'BCom in Marketing',
        'Bachelor of Engineering (BE)',
        'BE in Civil Engineering',
        'BE in Mechanical Engineering',
        'BE in Electrical Engineering',
        'Bachelor of Technology (BTech)',
        'BTech in Information Technology',
        'BTech in Computer Science',
        'BTech in Biotechnology',
        'Bachelor of Fine Arts (BFA)',
        'BFA in Painting',
        'BFA in Sculpture',
        'BFA in Graphic Design',
        'Bachelor of Business Administration (BBA)',
        'BBA in Management',
        'BBA in Human Resources',
        'BBA in International Business',
        'Bachelor of Computer Applications (BCA)',
        'BCA in Software Development',
        'BCA in Database Management',
        'BCA in Networking',
        'Bachelor of Education (BEd)',
        'BEd in Primary Education',
        'BEd in Secondary Education',
        'BEd in Special Education',
        "Master's Degree",
        'Master of Arts (MA)',
        'MA in Literature',
        'MA in Sociology',
        'MA in Political Science',
        'Master of Science (MSc)',
        'MSc in Mathematics',
        'MSc in Environmental Science',
        'MSc in Computer Science',
        'Master of Commerce (MCom)',
        'MCom in Accounting',
        'MCom in Business Studies',
        'MCom in Corporate Governance',
        'Master of Engineering (ME)',
        'ME in Structural Engineering',
        'ME in Electrical Engineering',
        'ME in Software Engineering',
        'Master of Technology (MTech)',
        'MTech in Mechanical Engineering',
        'MTech in Chemical Engineering',
        'MTech in Electrical Engineering',
        'Master of Fine Arts (MFA)',
        'MFA in Performing Arts',
        'MFA in Visual Arts',
        'MFA in Creative Writing',
        'Master of Business Administration (MBA)',
        'MBA in Finance',
        'MBA in Marketing',
        'MBA in Operations Management',
        'MCA',
        'Master of Education (MEd)',
        'MEd in Curriculum and Instruction',
        'MEd in Educational Leadership',
        'MEd in Counseling',
        'Doctorate',
        'Doctor of Philosophy (PhD)',
        'PhD in Biology',
        'PhD in Physics',
        'PhD in Economics',
        'Doctor of Science (DSc)',
        'DSc in Mathematics',
        'DSc in Environmental Science',
        'DSc in Engineering',
        'Professional Degree',
        'Doctor of Medicine (MD)',
        'Juris Doctor (JD)',
        'Doctor of Dental Surgery (DDS)',
        'Doctor of Veterinary Medicine (DVM)',
        'Master of Social Work (MSW)',
        'Master of Public Health (MPH)',
        'Postdoctoral',
        'Postdoctoral Research',
        'Others'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::education-info.education-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::education-info.education-info',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiEventEvent extends Schema.CollectionType {
  collectionName: 'events';
  info: {
    singularName: 'event';
    pluralName: 'events';
    displayName: 'event';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    date: Attribute.Date;
    time: Attribute.Time;
    location: Attribute.String;
    organizer: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'api::member.member'
    >;
    members: Attribute.Relation<
      'api::event.event',
      'manyToMany',
      'api::member.member'
    >;
    type: Attribute.Enumeration<['offline', 'virtual', 'webinar', 'workshops']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::event.event',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFamilyInformationFamilyInformation
  extends Schema.CollectionType {
  collectionName: 'family_informations';
  info: {
    singularName: 'family-information';
    pluralName: 'family-informations';
    displayName: 'family information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    family_type: Attribute.Enumeration<
      ['Joint Family', 'Nuclear Family', 'Others']
    >;
    family_status: Attribute.Enumeration<
      ['Middle Class', 'Upper-Middle Class', 'High Class', 'Rich/Affluent']
    >;
    family_value: Attribute.Enumeration<
      ['Orthodox', 'Traditional', 'Moderate', 'Liberal']
    >;
    home_type: Attribute.Enumeration<
      ['Own Home', 'Rented', 'Apartment', 'villa']
    >;
    living_situation: Attribute.Enumeration<
      [
        'Living with Parents',
        'Living Alone',
        'Living with Roommates',
        'Living with Family',
        'Living in a Joint Family',
        'Living in Own House',
        'Living in Rented Accommodation',
        'Living in a Hostel/PG',
        'Living Abroad'
      ]
    >;
    father_details: Attribute.Enumeration<
      [
        'Employed',
        'Not Employed',
        'Retired',
        'Business Man',
        'Professional',
        'Passed Away'
      ]
    >;
    mother_details: Attribute.Enumeration<
      [
        'Employed',
        'Not Employed',
        'Retired',
        'Business Women',
        'Professional',
        'Passed Away'
      ]
    >;
    no_elder_brother: Attribute.Integer;
    no_younger_bro: Attribute.Integer;
    no_married_bro: Attribute.Integer;
    no_elder_sister: Attribute.Integer;
    no_younger_sister: Attribute.Integer;
    family_origin: Attribute.String;
    family_details: Attribute.Text;
    member_id: Attribute.Relation<
      'api::family-information.family-information',
      'oneToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::family-information.family-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::family-information.family-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFamilyProfileFamilyProfile extends Schema.CollectionType {
  collectionName: 'family_profiles';
  info: {
    singularName: 'family-profile';
    pluralName: 'family-profiles';
    displayName: 'family_profile';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    family_name: Attribute.String;
    member_id: Attribute.Relation<
      'api::family-profile.family-profile',
      'oneToOne',
      'api::member.member'
    >;
    joint_accounts: Attribute.JSON;
    match_review: Attribute.Relation<
      'api::family-profile.family-profile',
      'oneToOne',
      'api::match-review.match-review'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::family-profile.family-profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::family-profile.family-profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFaqFaq extends Schema.CollectionType {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'FAQ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
    admin_user: Attribute.Relation<
      'api::faq.faq',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::faq.faq', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiFeedbackAndRatingFeedbackAndRating
  extends Schema.CollectionType {
  collectionName: 'feedback_and_ratings';
  info: {
    singularName: 'feedback-and-rating';
    pluralName: 'feedback-and-ratings';
    displayName: 'feedback and rating';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::feedback-and-rating.feedback-and-rating',
      'oneToOne',
      'api::member.member'
    >;
    profile_id: Attribute.Relation<
      'api::feedback-and-rating.feedback-and-rating',
      'oneToOne',
      'api::member.member'
    >;
    rating: Attribute.Integer;
    feedback: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feedback-and-rating.feedback-and-rating',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feedback-and-rating.feedback-and-rating',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHobbiesAndInterestHobbiesAndInterest
  extends Schema.CollectionType {
  collectionName: 'hobbies_and_interests';
  info: {
    singularName: 'hobbies-and-interest';
    pluralName: 'hobbies-and-interests';
    displayName: 'Hobbies and Interest';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hobbies_and_interest: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Art and Crafts',
          'Astronomy',
          'Baking',
          'Bird watching',
          'Board Games',
          'Book Club',
          'Calligraphy',
          'Camping',
          'Chess',
          'Cooking',
          'Dance',
          'Drawing',
          'Fishing',
          'Gardening',
          'Hiking',
          'Knitting',
          'Meditation',
          'Music',
          'Painting',
          'Photography',
          'Pottery',
          'Reading',
          'Running',
          'Sculpting',
          'Sewing',
          'Singing',
          'Swimming',
          'Traveling',
          'Volunteering',
          'Writing'
        ]
      >;
    favourite_food: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Cuisines: ',
          'Italian',
          'Chinese',
          'Indian',
          'Mexican',
          'Thai',
          'Japanese',
          'French',
          'Greek',
          'Spanish',
          'Lebanese',
          'Dietary Preferences: ',
          'Vegetarian',
          'Vegan',
          'Pescatarian',
          'Gluten-Free',
          'Keto',
          'Paleo',
          'Low-Carb',
          'Dairy-Free',
          'Nut-Free',
          'Halal',
          'Food Categories:',
          'Fruits',
          'Vegetables',
          'Grains',
          'Proteins',
          'Dairy',
          'Sweets',
          'Beverages',
          'Seafood',
          'Meat',
          'Legumes',
          'Popular Dishes:',
          'Pizza',
          'Sushi',
          'Tacos',
          'Pasta',
          'Burgers',
          'Salad',
          'Soup',
          'Sandwich',
          'Curry',
          'BBQ'
        ]
      >;
    favourite_sports: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Archery',
          'Athletics (Track and Field)',
          'Badminton',
          'Baseball',
          'Basketball',
          'Biathlon',
          'Billiards',
          'Bowling',
          'Boxing',
          'Canoeing',
          'Climbing',
          'Cricket',
          'Cross-Country Skiing',
          'Cycling',
          'Darts',
          'Diving',
          'Fencing',
          'Field Hockey',
          'Figure Skating',
          'Fishing',
          'Football (American)',
          'Football (Soccer)',
          'Golf',
          'Gymnastics',
          'Handball, Hiking',
          'Hockey (Ice)',
          'Horse Racing',
          'Ice Hockey',
          'Ice Skating',
          'Judo',
          ' Karate',
          'Kayaking',
          'Kendo'
        ]
      >;
    favourite_places: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Australia',
          'Austria',
          'Bahamas',
          'Bali',
          '',
          'Barcelona',
          '',
          'Beijing',
          '',
          'Berlin',
          'Brazil',
          'California',
          'Canada',
          'Cape Town',
          'Caribbean',
          'Chicago',
          'China',
          'Costa Rica',
          'Croatia',
          'Cuba',
          'Denmark',
          'Dubai',
          'Dublin',
          'Egypt',
          'England',
          'Fiji',
          'Finland',
          'France',
          'Germany',
          'Greece',
          'Greenland',
          'Hawaii',
          'Hong Kong',
          '',
          'Hungary',
          '',
          'Iceland',
          '',
          'India',
          '',
          'Indonesia',
          '',
          'Ireland',
          '',
          'Italy',
          '',
          'Jamaica',
          '',
          'Japan',
          '',
          'Kenya',
          '',
          'Korea, South',
          '',
          'London',
          '',
          'Los Angeles',
          '',
          'Maldives',
          '',
          'Malaysia',
          '',
          'Mexico',
          '',
          'Miami',
          '',
          'Morocco',
          '',
          'Nepal',
          '',
          'Netherlands',
          '',
          'New York',
          '',
          'New Zealand',
          '',
          'Norway',
          '',
          'Paris',
          '',
          'Peru',
          '',
          'Philippines',
          '',
          'Portugal',
          '',
          'Rome',
          '',
          'Russia',
          '',
          'Scotland',
          '',
          'Singapore',
          '',
          'South Africa',
          '',
          'Spain',
          '',
          'Switzerland',
          '',
          'Sydney',
          '',
          'Thailand',
          '',
          'Turkey',
          '',
          'United Arab Emirates',
          '',
          'United Kingdom',
          '',
          'United States',
          '',
          'Vancouver',
          '',
          'Venice',
          '',
          'Vietnam',
          '',
          'Zimbabwe'
        ]
      >;
    books: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Adventure',
          'Autobiography',
          'Biography',
          'Classics',
          'Comic Book',
          'Cookbook',
          'Crime',
          'Drama',
          'Dystopian',
          'Fantasy',
          'Graphic Novel',
          'Historical Fiction',
          'History',
          'Horror',
          'Literary Fiction',
          'Memoir',
          'Mystery',
          'Non-Fiction',
          'Poetry',
          'Romance',
          'Science Fiction',
          'Self-Help',
          'Short Stories',
          'Suspense',
          'Thriller',
          'Travel',
          'True Crime',
          'Young Adult (YA)',
          ''
        ]
      >;
    movies_and_music: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Movies:',
          'Action',
          'Adventure',
          'Animation',
          'Biography',
          'Comedy',
          'Crime',
          'Documentary',
          'Drama',
          'Family',
          'Fantasy',
          'Historical',
          'Horror',
          'Musical',
          'Mystery',
          'Romance',
          'Science Fiction',
          'Sports',
          'Thriller',
          'War',
          'Western',
          '',
          'Music:',
          'Blues',
          'Classical',
          'Country',
          'Dance',
          'Electronic',
          'Hip Hop',
          'Jazz',
          'Metal',
          'Pop',
          'Punk',
          'R&B',
          'Rap',
          'Reggae',
          'Rock',
          'Soul'
        ]
      >;
    personality: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Adventurous',
          '',
          'Ambitious',
          '',
          'Amiable',
          '',
          'Analytical',
          '',
          'Artistic',
          '',
          'Assertive',
          '',
          'Brave',
          '',
          'Caring',
          '',
          'Charismatic',
          '',
          'Cheerful',
          '',
          'Compassionate',
          '',
          'Confident',
          '',
          'Conscientious',
          '',
          'Creative',
          '',
          'Curious',
          '',
          'Dependable',
          '',
          'Determined',
          '',
          'Diligent',
          '',
          'Empathetic',
          '',
          'Energetic',
          '',
          'Enthusiastic',
          '',
          'Flexible',
          '',
          'Friendly',
          '',
          'Generous',
          '',
          'Honest',
          '',
          'Humorous',
          '',
          'Independent',
          '',
          'Innovative',
          '',
          'Intelligent',
          '',
          'Kind',
          '',
          'Loyal',
          '',
          'Motivated',
          '',
          'Optimistic',
          '',
          'Organized',
          '',
          'Patient',
          '',
          'Perceptive',
          '',
          'Persistent',
          '',
          'Practical',
          '',
          'Proactive',
          '',
          'Rational',
          '',
          'Reliable',
          '',
          'Resourceful',
          '',
          'Sociable',
          '',
          'Thoughtful',
          '',
          'Trustworthy',
          '',
          'Understanding',
          '',
          'Versatile',
          '',
          'Warm',
          '',
          'Wise',
          ''
        ]
      >;
    sense_of_humor: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Dry',
          '',
          'Sarcastic',
          '',
          'Witty',
          '',
          'Clever',
          '',
          'Satirical',
          '',
          'Dark',
          '',
          'Slapstick',
          '',
          'Absurd',
          '',
          'Deadpan',
          '',
          'Self-deprecating',
          '',
          'Punny',
          '',
          'Observational',
          '',
          'Irreverent',
          '',
          'Whimsical',
          '',
          'Silly',
          '',
          'Cringe',
          '',
          'Quirky',
          '',
          'Offbeat',
          '',
          'Satirical',
          '',
          'Deadpan',
          '',
          'Eccentric',
          '',
          'Wholesome',
          '',
          'Intellectual',
          '',
          'Biting',
          '',
          'Cheeky',
          '',
          'Absurdist',
          '',
          'Deadpan'
        ]
      >;
    dress_sense: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Classic',
          'Bohemian',
          'Chic',
          'Streetwear',
          'Casual',
          'Preppy',
          'Minimalist',
          'Formal Wear',
          'Artsy',
          'Traditional'
        ]
      >;
    languages_spoken: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Mandarin Chinese',
          'Spanish',
          'English',
          'Hindi',
          'Malayalam',
          'Tamil',
          'Telugu',
          'Kannada',
          'Arabic',
          'French',
          'Bengali',
          'Portuguese',
          'Russian',
          'Japanese'
        ]
      >;
    member_id: Attribute.Relation<
      'api::hobbies-and-interest.hobbies-and-interest',
      'oneToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hobbies-and-interest.hobbies-and-interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hobbies-and-interest.hobbies-and-interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHoroscopeInformationHoroscopeInformation
  extends Schema.CollectionType {
  collectionName: 'horoscope_informations';
  info: {
    singularName: 'horoscope-information';
    pluralName: 'horoscope-informations';
    displayName: 'Horoscope Information';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    date_of_birth: Attribute.Date;
    country_of_birth: Attribute.String;
    state_of_birth: Attribute.String;
    city_of_birth: Attribute.String;
    time_of_birth: Attribute.Time;
    chart_style: Attribute.Enumeration<
      ['South Indian', 'North Indian', 'East Indian', 'Kerala']
    >;
    horoscope: Attribute.Media;
    member_id: Attribute.Relation<
      'api::horoscope-information.horoscope-information',
      'oneToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::horoscope-information.horoscope-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::horoscope-information.horoscope-information',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInterestInterest extends Schema.CollectionType {
  collectionName: 'interests';
  info: {
    singularName: 'interest';
    pluralName: 'interests';
    displayName: 'Interest';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user: Attribute.Relation<
      'api::interest.interest',
      'manyToOne',
      'api::member.member'
    >;
    interested_user: Attribute.Relation<
      'api::interest.interest',
      'manyToOne',
      'api::member.member'
    >;
    interest: Attribute.Enumeration<
      ['Accept', 'Decline', 'Send Interest', "Don't Show"]
    >;
    predefined_message: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'api::predefined-message.predefined-message'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::interest.interest',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMatchReviewMatchReview extends Schema.CollectionType {
  collectionName: 'match_reviews';
  info: {
    singularName: 'match-review';
    pluralName: 'match-reviews';
    displayName: 'match_review';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    potential_match_id: Attribute.Relation<
      'api::match-review.match-review',
      'oneToOne',
      'api::member.member'
    >;
    status: Attribute.Enumeration<['Pending', 'Approved', 'Rejected']>;
    review_date: Attribute.DateTime;
    family_id: Attribute.Relation<
      'api::match-review.match-review',
      'oneToOne',
      'api::family-profile.family-profile'
    >;
    reviewed_by: Attribute.Enumeration<
      ['father', 'mother', 'sister', 'brother', 'family member']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::match-review.match-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::match-review.match-review',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMemberMember extends Schema.CollectionType {
  collectionName: 'members';
  info: {
    singularName: 'member';
    pluralName: 'members';
    displayName: 'Member';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    gender: Attribute.Enumeration<['male', 'female']>;
    dob: Attribute.Date;
    age: Attribute.Integer;
    height: Attribute.Integer;
    family_background: Attribute.Enumeration<
      ['Traditional', 'Moderate', 'Liberal']
    >;
    user_id: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
    profile_created_for: Attribute.Enumeration<
      ['Myself', 'Son', 'Daughter', 'Sister', 'Brother', 'Friend', 'Relative']
    >;
    weight: Attribute.Integer;
    marital_status: Attribute.Enumeration<
      ['Never Married', 'Widow', 'Divorced', 'Awaiting Divorce']
    >;
    eating_habits: Attribute.Enumeration<
      ['Vegetarian', 'Non-vegetarian', 'Eggetarian']
    >;
    drinking_habits: Attribute.Enumeration<['No', 'Occasionally', 'Yes']>;
    smoking_habits: Attribute.Enumeration<['No', 'Occasionally', 'Yes']>;
    verification_document: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::verification-document.verification-document'
    >;
    family_profile: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::family-profile.family-profile'
    >;
    match_review: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::match-review.match-review'
    >;
    religious_info: Attribute.Component<'component.religious-info'>;
    profile_image: Attribute.Media;
    messages: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::message.message'
    >;
    interests: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::interest.interest'
    >;
    privacy_setting: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::privacy-setting.privacy-setting'
    >;
    report: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::report.report'
    >;
    block: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::block.block'
    >;
    education_info: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::education-info.education-info'
    >;
    family_information: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::family-information.family-information'
    >;
    hobbies_and_interest: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::hobbies-and-interest.hobbies-and-interest'
    >;
    horoscope_information: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::horoscope-information.horoscope-information'
    >;
    income: Attribute.BigInteger;
    partner_preference: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::partner-preference.partner-preference'
    >;
    location: Attribute.Component<'component.location'>;
    notifications: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::notification.notification'
    >;
    support_ticket: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::support-ticket.support-ticket'
    >;
    background_verification: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::background-verification.background-verification'
    >;
    trust_badges: Attribute.Relation<
      'api::member.member',
      'manyToMany',
      'api::trust-badge.trust-badge'
    >;
    purchase: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::purchase.purchase'
    >;
    success_story: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::success-story.success-story'
    >;
    community_post: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::community-post.community-post'
    >;
    event: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::event.event'
    >;
    events: Attribute.Relation<
      'api::member.member',
      'manyToMany',
      'api::event.event'
    >;
    community_comment: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::community-comment.community-comment'
    >;
    feedback_and_rating: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::feedback-and-rating.feedback-and-rating'
    >;
    socialnetworkings: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::socialnetworking.socialnetworking'
    >;
    socialnw_posts: Attribute.Relation<
      'api::member.member',
      'manyToMany',
      'api::socialnw-post.socialnw-post'
    >;
    socialnw_post: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::socialnw-post.socialnw-post'
    >;
    predefined_message: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::predefined-message.predefined-message'
    >;
    video_profile: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::video-profile.video-profile'
    >;
    notification_setting: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::notification-setting.notification-setting'
    >;
    social_media_verification: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'api::social-media-verification.social-media-verification'
    >;
    languages_spoken: Attribute.String;
    budget_calculators: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::budget-calculator.budget-calculator'
    >;
    checklist_organizers: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::checklist-organizer.checklist-organizer'
    >;
    notification: Attribute.Relation<
      'api::member.member',
      'oneToMany',
      'api::notification.notification'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::member.member',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMessageMessage extends Schema.CollectionType {
  collectionName: 'messages';
  info: {
    singularName: 'message';
    pluralName: 'messages';
    displayName: 'message';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    sender_id: Attribute.Relation<
      'api::message.message',
      'manyToOne',
      'api::member.member'
    >;
    receiver_id: Attribute.Relation<
      'api::message.message',
      'manyToOne',
      'api::member.member'
    >;
    content: Attribute.Text;
    timestamp: Attribute.DateTime;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::message.message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotificationNotification extends Schema.CollectionType {
  collectionName: 'notifications';
  info: {
    singularName: 'notification';
    pluralName: 'notifications';
    displayName: 'Notification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    message: Attribute.String;
    type: Attribute.Enumeration<
      ['new_match', 'new_message', 'new_interest', 'profile_view']
    >;
    recipients: Attribute.Relation<
      'api::notification.notification',
      'manyToOne',
      'api::member.member'
    >;
    read: Attribute.Boolean & Attribute.DefaultTo<false>;
    member_id: Attribute.Relation<
      'api::notification.notification',
      'manyToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification.notification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiNotificationSettingNotificationSetting
  extends Schema.CollectionType {
  collectionName: 'notification_settings';
  info: {
    singularName: 'notification-setting';
    pluralName: 'notification-settings';
    displayName: 'notification setting';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user: Attribute.Relation<
      'api::notification-setting.notification-setting',
      'oneToOne',
      'api::member.member'
    >;
    notify_on_new_match: Attribute.Boolean & Attribute.DefaultTo<true>;
    notify_on_message: Attribute.Boolean & Attribute.DefaultTo<true>;
    notify_on_interest: Attribute.Boolean & Attribute.DefaultTo<true>;
    notify_on_profile_view: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::notification-setting.notification-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::notification-setting.notification-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPartnerPreferencePartnerPreference
  extends Schema.CollectionType {
  collectionName: 'partner_preferences';
  info: {
    singularName: 'partner-preference';
    pluralName: 'partner-preferences';
    displayName: 'Partner Preference';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    age_preference: Attribute.Component<'component.age'>;
    height_preference: Attribute.Component<'component.height-preference'>;
    complexion: Attribute.Enumeration<
      [
        'Any',
        'Brown',
        'Dark',
        "Doesn't Matter",
        'Fair',
        'Medium',
        'Olive',
        'Very Fair'
      ]
    >;
    physical_status: Attribute.Enumeration<
      [
        'Any',
        'Athletic',
        'Average',
        "Doesn't Matter",
        'Fit',
        'Muscular',
        'Overweight',
        'Slim',
        'Underweight',
        'Handicapped'
      ]
    >;
    eating_habits: Attribute.Enumeration<
      ["Doesn't Matter", 'Vegetarian', 'Non-vegetarian', 'Eggetarian']
    >;
    drinking_habits: Attribute.Enumeration<
      ["Doesn't Matter", 'No', 'Occassionally', 'Yes']
    >;
    smoking_habits: Attribute.Enumeration<
      ["Doesn't Matter", 'Yes', 'Occassionally', 'No']
    >;
    ethnic_group: Attribute.Enumeration<
      [
        "Doesn't Matter",
        'Assamese',
        'Awadhi',
        'Bengali',
        'Bhojpuri',
        'Chhattisgarhi',
        'Gujarati',
        'Haryanvi',
        'Hindi-speaking people',
        'Kannada',
        'Kashmiri',
        'Konkani',
        'Maithili',
        'Malayali',
        'Marathi',
        'Nepali',
        'Odia',
        'Punjabi',
        'Rajasthani',
        'Sindhi',
        'Tamil',
        'Telugu',
        'Tulu'
      ]
    >;
    appearence: Attribute.Enumeration<
      [
        "Doesn't Matter",
        'Athletic',
        'Average',
        'Chubby',
        'Curvy',
        'Fit',
        'Muscular',
        'Petite',
        'Plus Size',
        'Slim',
        'Tall',
        'Short',
        'Well-groomed'
      ]
    >;
    languages_spoken: Attribute.JSON &
      Attribute.CustomField<
        'plugin::multi-select.multi-select',
        [
          'Any',
          'Afrikaans  ',
          'Ainu  ',
          'Albanian  ',
          'Amharic  ',
          'Armenian  ',
          'Assamese  ',
          'Aymara  ',
          'Azerbaijani  ',
          'Basaa  ',
          'Basque  ',
          'Bemba  ',
          'Bengali  ',
          'Berber  ',
          'Bosnian  ',
          'Bulgarian  ',
          'Burmese  ',
          'Catalan  ',
          'Cebuano  ',
          'Chichewa  ',
          'Cherokee  ',
          'Chinese, Mandarin  ',
          'Croatian  ',
          'Czech  ',
          'Danish  ',
          'Dinka  ',
          'Dutch  ',
          'English  ',
          'Esperanto  ',
          'Estonian  ',
          'Ewe  ',
          'Faroese  ',
          'Farsi (Persian)  ',
          'Filipino (Tagalog)  ',
          'Finnish  ',
          'French  ',
          'Fula (Fulani)  ',
          'Georgian  ',
          'German  ',
          'Greek  ',
          'Greenlandic (Kalaallisut)  ',
          'Gujarati  ',
          'Hausa  ',
          'Hebrew  ',
          'Hindi  ',
          'Hopi  ',
          'Hungarian  ',
          'Icelandic  ',
          'Indonesian  ',
          'Inuktitut  ',
          'Irish (Gaelic)  ',
          'Italian  ',
          'Japanese  ',
          'Javanese  ',
          'Kazakh  ',
          'Khmer (Cambodian)  ',
          'Kinyarwanda  ',
          'Kirundi  ',
          'Korean  ',
          'Kurdish  ',
          'Lao  ',
          'Latvian  ',
          'Lithuanian  ',
          'Macedonian  ',
          'Maasai  ',
          'Malay',
          'Malayalam  ',
          'Maltese  ',
          'Maori  ',
          'Marathi  ',
          'Mongolian  ',
          'Myanmar (Burmese)  ',
          'Navajo  ',
          'Nepali  ',
          'Norwegian  ',
          'Odia  ',
          'Polish  ',
          'Portuguese  ',
          'Quechua  ',
          'Romanian  ',
          'Russian',
          'Samoan  ',
          'Serbian   ',
          'Sinhala',
          'Sioux  ',
          'Slovak  ',
          'Slovenian  ',
          'Somali  ',
          'Spanish  ',
          'Sundanese  ',
          'Swahili  ',
          'Swedish  ',
          'Tahitian  ',
          'Tamil  ',
          'Telugu  ',
          'Thai  ',
          'Tibetan  ',
          'Tswana  ',
          'Tulu ',
          'Turkish',
          'Tongan  ',
          'Ukrainian  ',
          'Urdu  ',
          'Uzbek  ',
          'Vietnamese  ',
          'Welsh  ',
          'Xhosa  ',
          'Yoruba  ',
          'Zulu'
        ]
      >;
    religious_preference: Attribute.Component<'component.religion-preference'>;
    partner_education_preference: Attribute.Component<'component.partner-education-preference'>;
    partner_location: Attribute.Component<'component.partner-location'>;
    member_id: Attribute.Relation<
      'api::partner-preference.partner-preference',
      'oneToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::partner-preference.partner-preference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::partner-preference.partner-preference',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPredefinedMessagePredefinedMessage
  extends Schema.CollectionType {
  collectionName: 'predefined_messages';
  info: {
    singularName: 'predefined-message';
    pluralName: 'predefined-messages';
    displayName: 'predefined message';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    content: Attribute.Text;
    member: Attribute.Relation<
      'api::predefined-message.predefined-message',
      'oneToOne',
      'api::member.member'
    >;
    interest: Attribute.Relation<
      'api::predefined-message.predefined-message',
      'oneToOne',
      'api::interest.interest'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::predefined-message.predefined-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::predefined-message.predefined-message',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrivacySettingPrivacySetting extends Schema.CollectionType {
  collectionName: 'privacy_settings';
  info: {
    singularName: 'privacy-setting';
    pluralName: 'privacy-settings';
    displayName: 'privacy setting';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    profile_visibility: Attribute.Enumeration<
      ['Public', 'Only Matches', 'Private']
    >;
    can_contact: Attribute.Enumeration<['Everyone', 'Only Matches', 'No One']>;
    member_id: Attribute.Relation<
      'api::privacy-setting.privacy-setting',
      'oneToOne',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::privacy-setting.privacy-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::privacy-setting.privacy-setting',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPurchasePurchase extends Schema.CollectionType {
  collectionName: 'purchases';
  info: {
    singularName: 'purchase';
    pluralName: 'purchases';
    displayName: 'purchase';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member: Attribute.Relation<
      'api::purchase.purchase',
      'oneToOne',
      'api::member.member'
    >;
    subscription_plan: Attribute.Relation<
      'api::purchase.purchase',
      'oneToOne',
      'api::subscription-plan.subscription-plan'
    >;
    purchase_date: Attribute.Date;
    expiry_date: Attribute.Date;
    type: Attribute.Enumeration<['one-time feature', 'boost']>;
    payment_method: Attribute.Enumeration<
      ['bank transfer', 'paypal', 'credit card']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::purchase.purchase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::purchase.purchase',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuestionQuestion extends Schema.CollectionType {
  collectionName: 'questions';
  info: {
    singularName: 'question';
    pluralName: 'questions';
    displayName: 'Question';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    question_text: Attribute.Text;
    options: Attribute.JSON;
    correct_option: Attribute.Integer;
    quiz: Attribute.Relation<
      'api::question.question',
      'manyToOne',
      'api::quiz.quiz'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::question.question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::question.question',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiQuizQuiz extends Schema.CollectionType {
  collectionName: 'quizzes';
  info: {
    singularName: 'quiz';
    pluralName: 'quizzes';
    displayName: 'quiz';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    questions: Attribute.Relation<
      'api::quiz.quiz',
      'oneToMany',
      'api::question.question'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::quiz.quiz', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::quiz.quiz', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiRelationshipInsightRelationshipInsight
  extends Schema.CollectionType {
  collectionName: 'relationship_insights';
  info: {
    singularName: 'relationship-insight';
    pluralName: 'relationship-insights';
    displayName: 'relationship insight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
    category: Attribute.Enumeration<
      [
        'Communication',
        'Trust',
        'Respect',
        'Conflict Resolution',
        'Intimacy',
        'General'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::relationship-insight.relationship-insight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::relationship-insight.relationship-insight',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiReportReport extends Schema.CollectionType {
  collectionName: 'reports';
  info: {
    singularName: 'report';
    pluralName: 'reports';
    displayName: 'Report ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    reported_user: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'api::member.member'
    >;
    reporting_user: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'api::member.member'
    >;
    reason: Attribute.Text;
    status: Attribute.Enumeration<['Pending', 'Reviewed', 'Action Taken']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::report.report',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialMediaVerificationSocialMediaVerification
  extends Schema.CollectionType {
  collectionName: 'social_media_verifications';
  info: {
    singularName: 'social-media-verification';
    pluralName: 'social-media-verifications';
    displayName: 'social media verification';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user: Attribute.Relation<
      'api::social-media-verification.social-media-verification',
      'oneToOne',
      'api::member.member'
    >;
    provider: Attribute.Enumeration<['Facebook', 'Instagram', 'Linkedin']>;
    profile_url: Attribute.String;
    profile_id: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::social-media-verification.social-media-verification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::social-media-verification.social-media-verification',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialnetworkingSocialnetworking
  extends Schema.CollectionType {
  collectionName: 'socialnetworkings';
  info: {
    singularName: 'socialnetworking';
    pluralName: 'socialnetworkings';
    displayName: 'socialnetworking ';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user_1: Attribute.Relation<
      'api::socialnetworking.socialnetworking',
      'manyToOne',
      'api::member.member'
    >;
    user_2: Attribute.Relation<
      'api::socialnetworking.socialnetworking',
      'manyToOne',
      'api::member.member'
    >;
    status: Attribute.Enumeration<
      ['Send Request', 'Pending', 'Accepted', 'Blocked']
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::socialnetworking.socialnetworking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::socialnetworking.socialnetworking',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSocialnwPostSocialnwPost extends Schema.CollectionType {
  collectionName: 'socialnw_posts';
  info: {
    singularName: 'socialnw-post';
    pluralName: 'socialnw-posts';
    displayName: 'socialnw post';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    author: Attribute.Relation<
      'api::socialnw-post.socialnw-post',
      'manyToOne',
      'api::member.member'
    >;
    content: Attribute.String;
    likes: Attribute.Relation<
      'api::socialnw-post.socialnw-post',
      'manyToMany',
      'api::member.member'
    >;
    comments: Attribute.Component<'component.socialnw-comment', true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::socialnw-post.socialnw-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::socialnw-post.socialnw-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSubscriptionPlanSubscriptionPlan
  extends Schema.CollectionType {
  collectionName: 'subscription_plans';
  info: {
    singularName: 'subscription-plan';
    pluralName: 'subscription-plans';
    displayName: 'subscription plan';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    price: Attribute.Decimal;
    duration: Attribute.String;
    features: Attribute.Text;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    purchase: Attribute.Relation<
      'api::subscription-plan.subscription-plan',
      'oneToOne',
      'api::purchase.purchase'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::subscription-plan.subscription-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::subscription-plan.subscription-plan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSuccessMetricSuccessMetric extends Schema.CollectionType {
  collectionName: 'success_metrics';
  info: {
    singularName: 'success-metric';
    pluralName: 'success-metrics';
    displayName: 'success metric';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    successful_connections: Attribute.Integer;
    number_of_matches: Attribute.Integer;
    marriages: Attribute.Integer;
    last_updated: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::success-metric.success-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::success-metric.success-metric',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSuccessStorySuccessStory extends Schema.CollectionType {
  collectionName: 'success_stories';
  info: {
    singularName: 'success-story';
    pluralName: 'success-stories';
    displayName: 'success_story';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member: Attribute.Relation<
      'api::success-story.success-story',
      'oneToOne',
      'api::member.member'
    >;
    couple_names: Attribute.String;
    marriage_date: Attribute.Date;
    story: Attribute.Text;
    photo: Attribute.Media;
    rating: Attribute.Integer;
    active: Attribute.Boolean & Attribute.DefaultTo<true>;
    posted_on: Attribute.Date;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::success-story.success-story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::success-story.success-story',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSupportTicketSupportTicket extends Schema.CollectionType {
  collectionName: 'support_tickets';
  info: {
    singularName: 'support-ticket';
    pluralName: 'support-tickets';
    displayName: 'support ticket';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToOne',
      'api::member.member'
    >;
    subject: Attribute.String;
    description: Attribute.Text;
    status: Attribute.Enumeration<['Open', 'In Progress', 'Closed']>;
    priority: Attribute.Enumeration<['Low', 'Medium', 'High']>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::support-ticket.support-ticket',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTroubleshootingGuideTroubleshootingGuide
  extends Schema.CollectionType {
  collectionName: 'troubleshooting_guides';
  info: {
    singularName: 'troubleshooting-guide';
    pluralName: 'troubleshooting-guides';
    displayName: 'troubleshooting guide';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    issue: Attribute.Text;
    solution: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::troubleshooting-guide.troubleshooting-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::troubleshooting-guide.troubleshooting-guide',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTrustBadgeTrustBadge extends Schema.CollectionType {
  collectionName: 'trust_badges';
  info: {
    singularName: 'trust-badge';
    pluralName: 'trust-badges';
    displayName: 'Trust badge';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Media;
    members: Attribute.Relation<
      'api::trust-badge.trust-badge',
      'manyToMany',
      'api::member.member'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::trust-badge.trust-badge',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::trust-badge.trust-badge',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTutorialTutorial extends Schema.CollectionType {
  collectionName: 'tutorials';
  info: {
    singularName: 'tutorial';
    pluralName: 'tutorials';
    displayName: 'Tutorial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    video_url: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::tutorial.tutorial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVendorDirectoryVendorDirectory
  extends Schema.CollectionType {
  collectionName: 'vendor_directories';
  info: {
    singularName: 'vendor-directory';
    pluralName: 'vendor-directories';
    displayName: 'vendor directory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vendor_name: Attribute.String;
    category: Attribute.String;
    description: Attribute.Text;
    contact: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::vendor-directory.vendor-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::vendor-directory.vendor-directory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVerificationDocumentVerificationDocument
  extends Schema.CollectionType {
  collectionName: 'verification_documents';
  info: {
    singularName: 'verification-document';
    pluralName: 'verification-documents';
    displayName: 'verification document';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    member_id: Attribute.Relation<
      'api::verification-document.verification-document',
      'oneToOne',
      'api::member.member'
    >;
    id_verification: Attribute.Media;
    photo_verification: Attribute.Media;
    education_verification: Attribute.Media;
    verification_status: Attribute.Enumeration<
      ['pending', 'approved', 'rejected']
    > &
      Attribute.DefaultTo<'pending'>;
    date: Attribute.DateTime;
    background_verifications: Attribute.Relation<
      'api::verification-document.verification-document',
      'oneToMany',
      'api::background-verification.background-verification'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::verification-document.verification-document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::verification-document.verification-document',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiVideoProfileVideoProfile extends Schema.CollectionType {
  collectionName: 'video_profiles';
  info: {
    singularName: 'video-profile';
    pluralName: 'video-profiles';
    displayName: 'video_profile';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    user: Attribute.Relation<
      'api::video-profile.video-profile',
      'oneToOne',
      'api::member.member'
    >;
    description: Attribute.String;
    video: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::video-profile.video-profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::video-profile.video-profile',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWeddingServiceProviderWeddingServiceProvider
  extends Schema.CollectionType {
  collectionName: 'wedding_service_providers';
  info: {
    singularName: 'wedding-service-provider';
    pluralName: 'wedding-service-providers';
    displayName: 'wedding service provider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    category: Attribute.String;
    contact_information: Attribute.String;
    website: Attribute.String;
    description: Attribute.String;
    special_offer: Attribute.Component<'component.special-offer'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wedding-service-provider.wedding-service-provider',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wedding-service-provider.wedding-service-provider',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::background-verification.background-verification': ApiBackgroundVerificationBackgroundVerification;
      'api::block.block': ApiBlockBlock;
      'api::budget-calculator.budget-calculator': ApiBudgetCalculatorBudgetCalculator;
      'api::checklist-organizer.checklist-organizer': ApiChecklistOrganizerChecklistOrganizer;
      'api::community-comment.community-comment': ApiCommunityCommentCommunityComment;
      'api::community-post.community-post': ApiCommunityPostCommunityPost;
      'api::education-info.education-info': ApiEducationInfoEducationInfo;
      'api::event.event': ApiEventEvent;
      'api::family-information.family-information': ApiFamilyInformationFamilyInformation;
      'api::family-profile.family-profile': ApiFamilyProfileFamilyProfile;
      'api::faq.faq': ApiFaqFaq;
      'api::feedback-and-rating.feedback-and-rating': ApiFeedbackAndRatingFeedbackAndRating;
      'api::hobbies-and-interest.hobbies-and-interest': ApiHobbiesAndInterestHobbiesAndInterest;
      'api::horoscope-information.horoscope-information': ApiHoroscopeInformationHoroscopeInformation;
      'api::interest.interest': ApiInterestInterest;
      'api::match-review.match-review': ApiMatchReviewMatchReview;
      'api::member.member': ApiMemberMember;
      'api::message.message': ApiMessageMessage;
      'api::notification.notification': ApiNotificationNotification;
      'api::notification-setting.notification-setting': ApiNotificationSettingNotificationSetting;
      'api::partner-preference.partner-preference': ApiPartnerPreferencePartnerPreference;
      'api::predefined-message.predefined-message': ApiPredefinedMessagePredefinedMessage;
      'api::privacy-setting.privacy-setting': ApiPrivacySettingPrivacySetting;
      'api::purchase.purchase': ApiPurchasePurchase;
      'api::question.question': ApiQuestionQuestion;
      'api::quiz.quiz': ApiQuizQuiz;
      'api::relationship-insight.relationship-insight': ApiRelationshipInsightRelationshipInsight;
      'api::report.report': ApiReportReport;
      'api::social-media-verification.social-media-verification': ApiSocialMediaVerificationSocialMediaVerification;
      'api::socialnetworking.socialnetworking': ApiSocialnetworkingSocialnetworking;
      'api::socialnw-post.socialnw-post': ApiSocialnwPostSocialnwPost;
      'api::subscription-plan.subscription-plan': ApiSubscriptionPlanSubscriptionPlan;
      'api::success-metric.success-metric': ApiSuccessMetricSuccessMetric;
      'api::success-story.success-story': ApiSuccessStorySuccessStory;
      'api::support-ticket.support-ticket': ApiSupportTicketSupportTicket;
      'api::troubleshooting-guide.troubleshooting-guide': ApiTroubleshootingGuideTroubleshootingGuide;
      'api::trust-badge.trust-badge': ApiTrustBadgeTrustBadge;
      'api::tutorial.tutorial': ApiTutorialTutorial;
      'api::vendor-directory.vendor-directory': ApiVendorDirectoryVendorDirectory;
      'api::verification-document.verification-document': ApiVerificationDocumentVerificationDocument;
      'api::video-profile.video-profile': ApiVideoProfileVideoProfile;
      'api::wedding-service-provider.wedding-service-provider': ApiWeddingServiceProviderWeddingServiceProvider;
    }
  }
}
