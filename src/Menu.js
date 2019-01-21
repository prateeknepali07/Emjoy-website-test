const Menu = [
    {
        heading: 'Main Navigation',
        translate: 'sidebar.heading.HEADER'
    },

    {
        name: 'Home',
        icon: 'icon-home',
        path: 'home',
        translate: 'sidebar.nav.home.HOME'
    },

    {
        name: 'Property',
        icon: 'icon-pin',
        path: 'Property-properties',
        translate: 'sidebar.nav.property.Properties'
    },
    {
        name: 'User Management',
        icon: 'icon-user-follow',
        path: 'users',
        translate: 'sidebar.nav.user management.user'
    },

    {
        name: 'Tenant',
        icon: 'icon-tag',
        translate: 'sidebar.nav.tenant.TENANT',
        submenu: [{
            name: 'Tenant List',
            path: 'tenant-tenantlist',
            translate: 'sidebar.nav.tenant.TENANTLIST'
        },

        {
            name: 'Visit Requests',
            path: 'tenant-visitrequest',
            translate: 'sidebar.nav.tenant.VISIT REQUEST'
        },
        {
            name: 'BookingRequest',
            path: 'tenant-BookingRequest',
            translate: 'sidebar.nav.tenant.BOOKINGREQUEST'
        },
        {
            name: 'Maintenance Tickets',
            path: 'tenant-maintenance Tickets',
            translate: 'sidebar.nav.tenant.MAINTENANCE TICKETS'
        },
        {
            name: 'Invoices',
            path: 'tenant-invoices',
            translate: 'sidebar.nav.tenant.INVOICES'
        },
        {
            name: 'Payment',
            path: 'tenant-payments',
            translate: 'sidebar.nav.tenant.PAYMENTS'
        }]
    },


    {
        name: 'Owner',
        icon: 'icon-bag',
        translate: 'sidebar.nav.owner.OWNER',
        submenu: [{
            name: 'OwnerInvoices',
            path: 'Owner-Invoices',
            translate: 'sidebar.nav.owner.Invoices'
        },
        {
            name: 'OwnerList',
            path: 'Owner-Ownerlist',
            translate: 'sidebar.nav.owner.Ownerlist'
        },
        {
            name: 'Payments',
            path: 'Owner-Ownerpayments',
            translate: 'sidebar.nav.owner.Ownerpayments'
        },
        {
            name: 'Propertylistrequest',
            path: 'Owner-propertylistrequest',
            translate: 'sidebar.nav.owner.propertylistrequest'
        }]
    },






];

export default Menu;