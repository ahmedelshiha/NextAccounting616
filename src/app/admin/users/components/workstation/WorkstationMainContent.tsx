'use client'

import { memo } from 'react'
import type { WorkstationMainContentProps } from '../../types/workstation'

export const WorkstationMainContent = memo(function WorkstationMainContent({
  users,
  stats,
  isLoading,
  onAddUser,
  onImport,
  onBulkOperation,
  onExport,
  onRefresh,
}: WorkstationMainContentProps) {
  return (
    <div className="workstation-main-content-wrapper">
      <div className="main-section">
        <h3 className="main-section-title">Quick Actions</h3>
        {/* QuickActionsBar will be integrated here */}
        <div className="main-placeholder">Quick Actions Bar Component</div>
      </div>

      <div className="main-section">
        <h3 className="main-section-title">Metrics</h3>
        {/* OperationsOverviewCards will be integrated here */}
        <div className="main-placeholder">Operations Overview Cards Component</div>
      </div>

      <div className="main-section flex-1 overflow-y-auto">
        <div className="user-directory-header">
          <h3 className="main-section-title">User Directory</h3>
        </div>
        {/* UsersTable will be integrated here */}
        <div className="main-placeholder">Users Table Component</div>
      </div>

      <div className="main-section">
        <h3 className="main-section-title">Pagination</h3>
        {/* Pagination controls will be integrated here */}
        <div className="main-placeholder">Pagination Component</div>
      </div>
    </div>
  )
})
