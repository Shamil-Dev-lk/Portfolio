import { 
  Users, 
  CalendarDays, 
  FolderKanban, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function AdminOverview() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-gray-700">Platform overview and analytics.</p>
      </div>

      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border border-gray-100">
          <dt>
            <div className="absolute rounded-md bg-blue-50 p-3">
              <Users className="h-6 w-6 text-blue-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Total Clients</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">128</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
              <span className="sr-only">Increased by </span>
              12
            </p>
          </dd>
        </div>
        
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border border-gray-100">
          <dt>
            <div className="absolute rounded-md bg-purple-50 p-3">
              <CalendarDays className="h-6 w-6 text-purple-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">New Bookings</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">8</p>
          </dd>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border border-gray-100">
          <dt>
            <div className="absolute rounded-md bg-brand-primary/10 p-3">
              <FolderKanban className="h-6 w-6 text-brand-primary" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Active Projects</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">14</p>
          </dd>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 border border-gray-100">
          <dt>
            <div className="absolute rounded-md bg-green-50 p-3">
              <DollarSign className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">Total Revenue (MTD)</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">$24,500</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
              <span className="sr-only">Increased by </span>
              15%
            </p>
          </dd>
        </div>
      </dl>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg border border-gray-100">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Bookings</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Acme Corp</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Web Development</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Global Tech</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">UI/UX Design</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Approved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg border border-gray-100">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Recent Invoices</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Acme Corp</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$2,400</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Paid</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Design Studio</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,850</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">Sent</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
