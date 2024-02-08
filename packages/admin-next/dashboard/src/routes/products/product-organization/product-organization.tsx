import { Drawer, Heading } from "@medusajs/ui"
import { useAdminProduct } from "medusa-react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { useRouteModalState } from "../../../hooks/use-route-modal-state"

export const ProductOrganization = () => {
  const { id } = useParams()
  const [open, onOpenChange, subscribe] = useRouteModalState()

  const { t } = useTranslation()

  const { product, isLoading, isError, error } = useAdminProduct(id!)

  const handleSuccessfulSubmit = () => {
    onOpenChange(false, true)
  }

  if (isError) {
    throw error
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <Drawer.Content>
        <Drawer.Header>
          <Heading>{t("products.editAttributes")}</Heading>
        </Drawer.Header>
        {!isLoading && product && <div></div>}
      </Drawer.Content>
    </Drawer>
  )
}
