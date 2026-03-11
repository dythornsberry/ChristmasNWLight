import PageHead from "@/components/PageHead";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <PageHead
        title="Page Not Found | Christmas Northwest"
        description="The page you requested could not be found."
        robots="noindex, nofollow"
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you requested is not available. Head back to the homepage to request a quote or call us directly at (425) 215-0935.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
