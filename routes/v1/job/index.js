const express = require('express');

// const config = require('config');
// const {
//   offsetAndLimitAndSort,
// } = require('../../../validationSchema/offsetAndLimitAndSort');
// const {
//   addOrEditContact,
//   contactListing,
// } = require('../../../validationSchema/contact');
const controller = require('../../../app/controller/Job');
//const { validateRequest } = require('../../../../utils/validation');
//const isAuthenticated = require('../../../../utils/middleware/auth/auth');

const router = express.Router();

router.get(
    '/listing',
   // isAuthenticated,
   // [contactListing, offsetAndLimitAndSort, validateRequest],
    controller.getAllJob,
  );

router.post(
  '/add',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.addJob,
);
router.put(
  '/edit/:jobId',
 // isAuthenticated,
 // [addOrEditContact, validateRequest],
  controller.editJob,
);
router.get(
  '/details/:jobId',
 // isAuthenticated,
 // controller.viewContactDetails,
);
router.delete('/delete/:jobId', /* isAuthenticated,*/ controller.deleteJob );


module.exports = router;
