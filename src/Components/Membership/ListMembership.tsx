import { Button, Result } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function ListMembership() {
  const { t } = useTranslation()
  return (
    <Result
    status="warning"
    title= {t('content.messWarning')}
    extra={
      <Button type="primary" key="console">
        <Link to="/dashboard/listProducts">{t('content.goback')}</Link>
      </Button>
    }
  />
  )
}
