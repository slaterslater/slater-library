// admin/pages/custom-page.tsx
import { PageContainer } from '@keystone-next/keystone/admin-ui/components';
export default function CustomPage() {
  return (
    <PageContainer header="Custom Page">
      <h1>This is a custom Admin UI Page</h1>
      <p>It can be accessed via the route <a href="/custom-page">/custom-page</a></p>
    </PageContainer>
  )
}