import React from 'react'
import {
  AllOrdersIcon,
  AllPaymentsIcon,
  ManualSettlementsIcon,
  MerchantProfileIcon,
  UnReconciledPaymentsIcon,
  ReconciledOrdersIcon,
  ReconciledPaymentsIcon,
  PendingOrdersIcon,
  OverviewIcon,
} from 'assets/svg'

export default [
  {
    heading: 'Main',
    children: [
      {
        title: 'Overview',
        link: '/overview',
        icon: <OverviewIcon />,
      },
    ],
  },
  {
    heading: 'Payments',
    children: [
      {
        title: 'All Payments',
        link: '/all-payments',
        icon: <AllPaymentsIcon />,
      },
      {
        title: 'Reconciled Payments',
        link: '/reconciled-payments',
        icon: <ReconciledPaymentsIcon />,
      },
      {
        title: 'Un - Reconciled Payments',
        link: '/un-reconciled-payments',
        icon: <UnReconciledPaymentsIcon />,
      },
      {
        title: 'Manual Settlement',
        link: '/manual-settlement',
        icon: <ManualSettlementsIcon />,
      },
    ],
  },
  {
    heading: 'Orders',
    children: [
      {
        title: 'All Orders',
        link: '/all-orders',
        icon: <AllOrdersIcon />,
      },
      {
        title: 'Pending Orders',
        link: '/pending-orders',
        icon: <PendingOrdersIcon />,
      },
      {
        title: 'Reconciled Orders',
        link: '/reconciled-orders',
        icon: <ReconciledOrdersIcon />,
      },
    ],
  },
  {
    heading: 'Merchant Profile',
    headerIcon:<MerchantProfileIcon/>
  },
]
