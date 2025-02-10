import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const breadcrumbMapping: Record<string, string> = {
  suppliers: "Suppliers",
  "add-item": "Add Item",
  "create-supplier": "Create Supplier",
  orders: "Orders",
  details: "Details",
};

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Home Link */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {/* Dynamically Render Breadcrumbs */}
        {pathnames.map((value, index) => {
          // Ignore numeric IDs and replace paths with mapped labels
          if (!isNaN(Number(value))) return null;

          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = breadcrumbMapping[value] || value.replace("-", " ");

          return (
            <span key={to} className="flex items-center">
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={to} className="capitalize">{label}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
            </span>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default DynamicBreadcrumbs;
