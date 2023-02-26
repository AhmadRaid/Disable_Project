const express = require('express');

// const config = require('config');
// const {
//   offsetAndLimitAndSort,
// } = require('../../../validationSchema/offsetAndLimitAndSort');
// const {
//   addOrEditContact,
//   contactListing,
// } = require('../../../validationSchema/contact');
const controller = require('../../../app/controller/Category');
//const { validateRequest } = require('../../../../utils/validation');
//const isAuthenticated = require('../../../../utils/middleware/auth/auth');

const router = express.Router();

router.get(
    '/listing',
   // isAuthenticated,
   // [contactListing, offsetAndLimitAndSort, validateRequest],
    controller.getAllCategory,
  );

router.post(
  '/add',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.addCategory,
);
router.put(
  '/edit/:categoryId',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.editCategory,
);
router.get(
  '/details/:categoryId',
 // isAuthenticated,
 // controller.viewContactDetails,
);
router.delete('/delete/:categoryId', /* isAuthenticated,*/ controller.deleteCategory );


module.exports = router;
