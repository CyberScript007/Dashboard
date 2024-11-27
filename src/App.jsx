// react router dom
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// app layout
import AppLayout from "./ui/AppLayout";

// context api
import { ToggleSidebarContext } from "./context/ToggleSidebarContext";

// dashboard pages
import DashboardAnalytics from "./pages/Dashboard/DashboardAnalytics";
import DashboardLogistics from "./pages/Dashboard/DashboardLogistics";
import DashboardEcommerce from "./pages/Dashboard/DashboardEcommerce";
import DashboardCrm from "./pages/Dashboard/DashboardCrm";
import DashboardAcademy from "./pages/Dashboard/DashboardAcademy";

// layout pages
import CollapsedMenu from "./pages/Layouts/CollapsedMenu";
import ContentNavbar from "./pages/Layouts/ContentNavbar";
import ContentNavSidebar from "./pages/Layouts/ContentNavSidebar";
import Horizontal from "./pages/Layouts/Horizontal";
import WithoutMenu from "./pages/Layouts/WithoutMenu";
import WithoutNavbar from "./pages/Layouts/WithoutNavbar";
import Fluid from "./pages/Layouts/Fluid";
import Container from "./pages/Layouts/Container";
import Blank from "./pages/Layouts/Blank";

// Front pages
import Landing from "./pages/Front Pages/Landing";
import Pricing from "./pages/Front Pages/Pricing";
import Payment from "./pages/Front Pages/Payment";
import Checkout from "./pages/Front Pages/Checkout";
import HelpCenter from "./pages/Front Pages/HelpCenter";

// Email page
import EmailPage from "./pages/EmailPage";

// Chat page
import ChatPage from "./pages/ChatPage";

// Calender page
import CalenderPage from "./pages/CalenderPage";

// Kanban page
import KanbanPage from "./pages/KanbanPage";

// Ecommerce page
import EcommerceDashboardPage from "./pages/Ecommerce/EcommerceDashboardPage";
import EcommerceProductListPage from "./pages/Ecommerce/Product/EcommerceProductListPage";
import EcommerceAddProductPage from "./pages/Ecommerce/Product/EcommerceAddProductPage";
import EcommerceCategoryListPage from "./pages/Ecommerce/Product/EcommerceCategoryListPage";
import EcommerceOrderDetailsPage from "./pages/Ecommerce/Order/EcommerceOrderDetailsPage";
import EcommerceOrderListPage from "./pages/Ecommerce/Order/EcommerceOrderListPage";
import EcommerceCustomerAllPage from "./pages/Ecommerce/Customer/EcommerceCustomerAllPage";
import EcommerceCustomerBillingPage from "./pages/Ecommerce/Customer/EcommerceCustomerBillingPage";
import EcommerceCustomerNotificationPage from "./pages/Ecommerce/Customer/EcommerceCustomerNotificationPage";
import EcommerceCustomerOverviewPage from "./pages/Ecommerce/Customer/EcommerceCustomerOverviewPage";
import EcommerceCustomerSecurity from "./pages/Ecommerce/Customer/EcommerceCustomerSecurity";
import EcommerceManageReviewsPage from "./pages/Ecommerce/EcommerceManageReviewsPage";
import EcommerceReferralsPage from "./pages/Ecommerce/EcommerceReferralsPage";

// Settings Page
import EcommerceSettingsCheckoutPage from "./pages/Ecommerce/Settings/EcommerceSettingsCheckoutPage";
import EcommerceSettingsDetailsPage from "./pages/Ecommerce/Settings/EcommerceSettingsDetailsPage";
import EcommerceSettingsLocationsPage from "./pages/Ecommerce/Settings/EcommerceSettingsLocationsPage";
import EcommerceSettingsNotificationPage from "./pages/Ecommerce/Settings/EcommerceSettingsNotificationPage";
import EcommerceSettingsPaymentsPage from "./pages/Ecommerce/Settings/EcommerceSettingsPaymentsPage";
import EcommerceSettingsShippingPage from "./pages/Ecommerce/Settings/EcommerceSettingsShippingPage";

// Academy page
import AcademyDashboardPage from "./pages/Academy/AcademyDashboardPage";
import AcademyCoursePage from "./pages/Academy/AcademyCoursePage";
import AcademyCourseDetailsPage from "./pages/Academy/AcademyCourseDetailsPage";

// Logistics page
import LogisticsDashboardPage from "./pages/Logistics/LogisticsDashboardPage";
import LogisticsFleetPage from "./pages/Logistics/LogisticsFleetPage";

// Invoice page
import InvoiceListPage from "./pages/Invoice/InvoiceListPage";
import InvoicePreviewPage from "./pages/Invoice/InvoicePreviewPage";
import InvoiceEditPage from "./pages/Invoice/InvoiceEditPage";
import InvoiceAddPage from "./pages/Invoice/InvoiceAddPage";

// Users page
import UsersListPage from "./pages/Users/UsersListPage";
import UsersViewAccountPage from "./pages/Users/View/UsersViewAccountPage";
import UsersViewSecurityPage from "./pages/Users/View/UsersViewSecurityPage";
import UsersViewBillingAndPlansPage from "./pages/Users/View/UsersViewBillingAndPlansPage";
import UsersViewNotificationPage from "./pages/Users/View/UsersViewNotificationPage";
import UsersViewConnectionPage from "./pages/Users/View/UsersViewConnectionPage";

// Roles and Permission
import RolesAndPermissionRolesPage from "./pages/RolesPermission/RolesAndPermissionRolesPage";
import RolesAndPermission_PermissionPage from "./pages/RolesPermission/RolesAndPermission_PermissionPage";

// Pages
import PagesUserProfile from "./pages/Pages/UserProfile/PagesUserProfile";
import PagesUserTeams from "./pages/Pages/UserProfile/PagesUserTeams";
import PagesUserProjects from "./pages/Pages/UserProfile/PagesUserProjects";
import PagesUserConnections from "./pages/Pages/UserProfile/PagesUserConections";
import PagesAccountSettingsAccount from "./pages/Pages/AccountSettings/PagesAccountSettingsAccount";
import PagesAccountSettingsSecurity from "./pages/Pages/AccountSettings/PagesAccountSettingSecurity";
import PagesAccountSettingsBillingAndPlans from "./pages/Pages/AccountSettings/PagesAccountSettingsBillingAndPlans";
import PagesAccountSettingsNotification from "./pages/Pages/AccountSettings/PagesAccountSettingsNotification";
import PagesAccountSettingsConnections from "./pages/Pages/AccountSettings/PagesAccountSettingsConnections";
import PagesFaq from "./pages/Pages/PagesFaq";
import PagesPricing from "./pages/Pages/PagesPricing";
import PagesMiscError from "./pages/Pages/Misc/PagesMiscError";
import PagesMiscUnderMaintenance from "./pages/Pages/Misc/PagesMiscUnderMaintenance";
import PagesMiscComingSoon from "./pages/Pages/Misc/PagesMiscComingSoon";
import PagesMiscNotAuthorized from "./pages/Pages/Misc/PagesMiscNotAuthorized";

// Authentication pages
import AuthenticationLoginBasic from "./pages/Authentication/Login/AuthenticationLoginBasic";
import AuthenticationLoginCover from "./pages/Authentication/Login/AuthenticationLoginCover";
import AuthenticationRegisterBasic from "./pages/Authentication/Register/AuthenticationRegisterBasic";
import AuthenticationRegisterCover from "./pages/Authentication/Register/AuthenticationRegisterCover";
import AuthenticationRegisterMultiSteps from "./pages/Authentication/Register/AuthenticationRegisterMultiSteps";
import AuthenticationVerifyEmailBasic from "./pages/Authentication/Verify Email/AuthenticationVerifyEmailBasic";
import AuthenticationVerifyEmailCover from "./pages/Authentication/Verify Email/AuthenticationVerifyEmailCover";
import AuthenticationResetPasswordBasic from "./pages/Authentication/Reset Password/AuthenticationResetPasswordBasic";
import AuthenticationResetPasswordCover from "./pages/Authentication/Reset Password/AuthenticationResetPasswordCover";
import AuthenticationForgotPasswordBasic from "./pages/Authentication/Forgot Password/AuthenticationForgotPasswordBasic";
import AuthenticationForgotPasswordCover from "./pages/Authentication/Forgot Password/AuthenticationForgotPasswordCover";
import AuthenticationTwoStepsBasic from "./pages/Authentication/Two Steps/AuthenticationTwoStepsBasic";
import AuthenticationTwoStepsCover from "./pages/Authentication/Two Steps/AuthenticationTwoStepsCover";

// Wizard Examples routes
import WizardExamplesCheckoutPage from "./pages/Wizard Examples/WizardExamplesCheckoutPage";
import WizardExamplesPropertyListingPage from "./pages/Wizard Examples/WizardExamplesPropertyListingPage";
import WizardExamplesCreateDeal from "./pages/Wizard Examples/WizardExamplesCreateDeal";

// Modal Examples page
import ModalExamplesPage from "./pages/ModalExamplesPage";

// Cards page
import CardsBasicPage from "./pages/Cards/CardsBasicPage";
import CardsAdvancePage from "./pages/Cards/CardsAdvancePage";
import CardsStatisticsPage from "./pages/Cards/CardsStatisticsPage";
import CardsAnalyticsPage from "./pages/Cards/CardsAnalyticsPage";
import CardsGamificationsPage from "./pages/Cards/CardsGamificationsPage";
import CardsActionsPage from "./pages/Cards/CardsActionsPage";

// user interface page
import UserInterfaceAccordionPage from "./pages/UserInterface/UserInterfaceAccordionPage";
import UserInterfaceCarouselPage from "./pages/UserInterface/UserInterfaceCarouselPage";
import UserInterfaceCollapsePage from "./pages/UserInterface/UserInterfaceCollapsePage";
import UserInterfaceModalsPage from "./pages/UserInterface/UserInterfaceModalsPage";
import UserInterfaceOffcanvasPage from "./pages/UserInterface/UserInterfaceOffcanvasPage";
import UserInterfaceTabAndPillsPage from "./pages/UserInterface/UserInterfaceTabAndPillsPage";
import UserInterfaceTooltipsAndPopoversPage from "./pages/UserInterface/UserInterfaceTooltipsAndPopoversPage";

// Extended UI page
import DragAndDropPage from "./pages/ExtendedUI/DragAndDropPage";
import StarRatingsPage from "./pages/ExtendedUI/StarRatingsPage";
import TimelineBasicPage from "./pages/ExtendedUI/Timeline/TimelineBasicPage";
import TimelineFullscreenPage from "./pages/ExtendedUI/Timeline/TimelineFullscreenPage";
import TourPage from "./pages/ExtendedUI/TourPage";
import TreeviewPage from "./pages/ExtendedUI/TreeviewPage";

// Forms and Tables page
import FormsWizardNumberedPage from "./pages/FormsAndTables/FormsWizard/FormsWizardNumberedPage";
import FormsWizardIconPage from "./pages/FormsAndTables/FormsWizard/FormsWizardIconPage";

// DataTables page
import DataTablesBasicPage from "./pages/FormsAndTables/DataTables/DataTablesBasicPage";
import DataTablesAdvancedPage from "./pages/FormsAndTables/DataTables/DataTablesAdvancedPage";

// Charts page
import ApexCharts from "./pages/Charts/ApexCharts";
import ChartJS from "./pages/Charts/ChartJS";

// Misc page
import Documentation from "./pages/Documentation";

function App() {
  return (
    <ToggleSidebarContext>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            {/* Dashboard  routes*/}
            {/* <Route index element={<Navigate to="dashboard-analytics" />} /> */}
            <Route
              path="dashboard-analytics"
              element={<DashboardAnalytics />}
            />
            <Route path="dashboard-crm" element={<DashboardCrm />} />
            <Route
              path="dashboard-eCommerce"
              element={<DashboardEcommerce />}
            />
            <Route
              path="dashboard-logistics"
              element={<DashboardLogistics />}
            />
            <Route path="dashboard-academy" element={<DashboardAcademy />} />
            {/* Layout routes */}
            <Route path="layout-collapsed-menu" element={<CollapsedMenu />} />
            <Route path="layout-content-navbar" element={<ContentNavbar />} />
            <Route
              path="layout-content-nav-sidebar"
              element={<ContentNavSidebar />}
            />
            <Route path="layout-horizontal" element={<Horizontal />} />
            <Route path="layout-without-menu" element={<WithoutMenu />} />
            <Route path="layout-without-navbar" element={<WithoutNavbar />} />
            <Route path="layout-fluid" element={<Fluid />} />
            <Route path="layout-container" element={<Container />} />
            <Route path="layout-blank" element={<Blank />} />
            {/* Email route */}
            <Route path="email" element={<EmailPage />} />
            {/* Chat router */}
            <Route path="chat" element={<ChatPage />} />
            {/* Calender route */}
            <Route path="calender" element={<CalenderPage />} />
            {/* Kanban route */}
            <Route path="kanban" element={<KanbanPage />} />
            {/* Ecommerce route */}
            <Route
              path="eCommerce-dashboard"
              element={<EcommerceDashboardPage />}
            />
            <Route
              path="eCommerce-product-list"
              element={<EcommerceProductListPage />}
            />
            <Route
              path="eCommerce-add-product"
              element={<EcommerceAddProductPage />}
            />
            <Route
              path="eCommerce-category-list"
              element={<EcommerceCategoryListPage />}
            />
            <Route
              path="eCommerce-order-list"
              element={<EcommerceOrderListPage />}
            />
            <Route
              path="eCommerce-order-details"
              element={<EcommerceOrderDetailsPage />}
            />
            <Route
              path="eCommerce-customer-all"
              element={<EcommerceCustomerAllPage />}
            />
            <Route
              path="eCommerce-customer-details-overview"
              element={<EcommerceCustomerOverviewPage />}
            />
            <Route
              path="eCommerce-customer-details-security"
              element={<EcommerceCustomerSecurity />}
            />
            <Route
              path="eCommerce-customer-details-billing"
              element={<EcommerceCustomerBillingPage />}
            />
            <Route
              path="eCommerce-customer-details-notifications"
              element={<EcommerceCustomerNotificationPage />}
            />
            <Route
              path="eCommerce-manage-reviews"
              element={<EcommerceManageReviewsPage />}
            />
            <Route
              path="eCommerce-referrals"
              element={<EcommerceReferralsPage />}
            />
            {/* Settings routes */}
            <Route
              path="eCommerce-settings-details"
              element={<EcommerceSettingsDetailsPage />}
            />
            <Route
              path="eCommerce-settings-payments"
              element={<EcommerceSettingsPaymentsPage />}
            />
            <Route
              path="eCommerce-settings-checkout"
              element={<EcommerceSettingsCheckoutPage />}
            />
            <Route
              path="eCommerce-settings-shipping"
              element={<EcommerceSettingsShippingPage />}
            />
            <Route
              path="eCommerce-settings-locations"
              element={<EcommerceSettingsLocationsPage />}
            />
            <Route
              path="eCommerce-settings-notifications"
              element={<EcommerceSettingsNotificationPage />}
            />
            {/* Academy routes  */}
            <Route
              path="academy-dashboard"
              element={<AcademyDashboardPage />}
            />
            <Route path="academy-course" element={<AcademyCoursePage />} />
            <Route
              path="academy-course-details"
              element={<AcademyCourseDetailsPage />}
            />
            {/* Logistics routes  */}
            <Route
              path="logistics-dashboard"
              element={<LogisticsDashboardPage />}
            />
            <Route path="logistics-fleet" element={<LogisticsFleetPage />} />
            {/* Invoice routes  */}
            <Route path="invoice-list" element={<InvoiceListPage />} />
            <Route path="invoice-preview" element={<InvoicePreviewPage />} />
            <Route path="invoice-edit" element={<InvoiceEditPage />} />
            <Route path="invoice-add" element={<InvoiceAddPage />} />
            {/* Users routes  */}
            <Route path="users-list" element={<UsersListPage />} />
            <Route
              path="users-view-account"
              element={<UsersViewAccountPage />}
            />
            <Route
              path="users-view-security"
              element={<UsersViewSecurityPage />}
            />
            <Route
              path="users-view-billing-plans"
              element={<UsersViewBillingAndPlansPage />}
            />
            <Route
              path="users-view-notifications"
              element={<UsersViewNotificationPage />}
            />
            <Route
              path="users-view-connections"
              element={<UsersViewConnectionPage />}
            />
            {/* Roles and Permission routes */}
            <Route
              path="rolesList-roles"
              element={<RolesAndPermissionRolesPage />}
            />
            <Route
              path="rolesList-permission"
              element={<RolesAndPermission_PermissionPage />}
            />
            {/* Pages routes */}
            <Route path="pages-user-profile" element={<PagesUserProfile />} />
            <Route
              path="pages-user-profile-teams"
              element={<PagesUserTeams />}
            />
            <Route
              path="pages-user-profile-projects"
              element={<PagesUserProjects />}
            />
            <Route
              path="pages-user-profile-connections"
              element={<PagesUserConnections />}
            />
            <Route
              path="pages-account-settings-account"
              element={<PagesAccountSettingsAccount />}
            />
            <Route
              path="pages-account-settings-security"
              element={<PagesAccountSettingsSecurity />}
            />
            <Route
              path="pages-account-settings-billing-plans"
              element={<PagesAccountSettingsBillingAndPlans />}
            />
            <Route
              path="pages-account-settings-notifications"
              element={<PagesAccountSettingsNotification />}
            />
            <Route
              path="pages-account-settings-connections"
              element={<PagesAccountSettingsConnections />}
            />
            <Route path="pages-faq" element={<PagesFaq />} />
            <Route path="pages-pricing" element={<PagesPricing />} />
            <Route path="pages-misc-error" element={<PagesMiscError />} />
            <Route
              path="pages-misc-under-maintenance"
              element={<PagesMiscUnderMaintenance />}
            />
            <Route
              path="pages-misc-coming-soon"
              element={<PagesMiscComingSoon />}
            />
            <Route
              path="pages-misc-not-authorized"
              element={<PagesMiscNotAuthorized />}
            />
            {/* Wizard Examples routes */}
            <Route
              path="wizard-examples-checkout"
              element={<WizardExamplesCheckoutPage />}
            />
            <Route
              path="wizard-examples-property-listing"
              element={<WizardExamplesPropertyListingPage />}
            />
            <Route
              path="wizard-examples-create-deal"
              element={<WizardExamplesCreateDeal />}
            />

            {/* Modal Examples routes */}
            <Route path="modal-examples" element={<ModalExamplesPage />} />

            {/* Cards routes */}
            <Route path="cards-basic" element={<CardsBasicPage />} />
            <Route path="cards-advance" element={<CardsAdvancePage />} />
            <Route path="cards-statistics" element={<CardsStatisticsPage />} />
            <Route path="cards-analytics" element={<CardsAnalyticsPage />} />
            <Route
              path="cards-gamifications"
              element={<CardsGamificationsPage />}
            />
            <Route path="cards-actions" element={<CardsActionsPage />} />

            {/* User interface routes */}
            <Route
              path="user-interface-accordion"
              element={<UserInterfaceAccordionPage />}
            />
            <Route
              path="user-interface-carousel"
              element={<UserInterfaceCarouselPage />}
            />
            <Route
              path="user-interface-collapse"
              element={<UserInterfaceCollapsePage />}
            />
            <Route
              path="user-interface-modals"
              element={<UserInterfaceModalsPage />}
            />
            <Route
              path="user-interface-offcanvas"
              element={<UserInterfaceOffcanvasPage />}
            />
            <Route
              path="user-interface-tab-pills"
              element={<UserInterfaceTabAndPillsPage />}
            />
            <Route
              path="user-interface-tooltips-popovers"
              element={<UserInterfaceTooltipsAndPopoversPage />}
            />

            {/* Extended UI routes */}
            <Route path="extend-ui-drag-drop" element={<DragAndDropPage />} />
            <Route
              path="extend-ui-star-ratings"
              element={<StarRatingsPage />}
            />
            <Route
              path="extend-ui-timeline-basic"
              element={<TimelineBasicPage />}
            />
            <Route
              path="extend-ui-timeline-fullscreen"
              element={<TimelineFullscreenPage />}
            />
            <Route path="extend-ui-tour" element={<TourPage />} />
            <Route path="extend-ui-treeview" element={<TreeviewPage />} />

            {/* Forms and Tables routes */}
            <Route
              path="forms-wizard-numbered"
              element={<FormsWizardNumberedPage />}
            />
            <Route
              path="forms-wizard-icons"
              element={<FormsWizardIconPage />}
            />

            {/* Datatables routes */}
            <Route path="data-tables-basic" element={<DataTablesBasicPage />} />
            <Route
              path="data-tables-advanced"
              element={<DataTablesAdvancedPage />}
            />

            {/* Charts routes */}
            <Route path="charts-apex" element={<ApexCharts />} />
            <Route path="charts-chartjs" element={<ChartJS />} />
          </Route>

          {/* Front routes */}
          <Route path="landing" element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="payment" element={<Payment />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="help" element={<HelpCenter />} />
          {/* Authentication routes*/}
          <Route
            path="authentication-login-basic"
            element={<AuthenticationLoginBasic />}
          />
          <Route
            path="authentication-login-cover"
            element={<AuthenticationLoginCover />}
          />
          <Route
            path="authentication-register-basic"
            element={<AuthenticationRegisterBasic />}
          />
          <Route
            path="authentication-register-cover"
            element={<AuthenticationRegisterCover />}
          />
          <Route
            path="authentication-register-multi-steps"
            element={<AuthenticationRegisterMultiSteps />}
          />
          <Route
            path="authentication-verify-email-basic"
            element={<AuthenticationVerifyEmailBasic />}
          />
          <Route
            path="authentication-verify-email-cover"
            element={<AuthenticationVerifyEmailCover />}
          />
          <Route
            path="authentication-reset-password-basic"
            element={<AuthenticationResetPasswordBasic />}
          />
          <Route
            path="authentication-reset-password-cover"
            element={<AuthenticationResetPasswordCover />}
          />
          <Route
            path="authentication-forgot-password-basic"
            element={<AuthenticationForgotPasswordBasic />}
          />
          <Route
            path="authentication-forgot-password-cover"
            element={<AuthenticationForgotPasswordCover />}
          />
          <Route
            path="authentication-two-steps-basic"
            element={<AuthenticationTwoStepsBasic />}
          />
          <Route
            path="authentication-two-steps-cover"
            element={<AuthenticationTwoStepsCover />}
          />

          {/* Misc route */}
          <Route path="documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </ToggleSidebarContext>
  );
}

export default App;
