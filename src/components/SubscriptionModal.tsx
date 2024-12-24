import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { SubscriptionCategory, BillingFrequency } from '../types/subscription';
import { useActivity } from '@/contexts/ActivityContext';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: SubscriptionFormData) => void;
  initialData?: Partial<SubscriptionFormData>;
}

export interface SubscriptionFormData {
  name: string;
  amount: number;
  category: SubscriptionCategory;
  frequency: BillingFrequency;
  nextBillingDate: string;
}

export function SubscriptionModal({ isOpen, onClose, onSubmit, initialData }: SubscriptionModalProps) {
  const { addActivity } = useActivity();
  const [formData, setFormData] = React.useState<SubscriptionFormData>({
    name: initialData?.name || '',
    amount: initialData?.amount || 0,
    category: initialData?.category || 'Entertainment',
    frequency: initialData?.frequency || 'Monthly',
    nextBillingDate: initialData?.nextBillingDate || new Date().toISOString().split('T')[0],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    addActivity(initialData ? 'resume' : 'add', formData.name);
    onClose();
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="text-lg font-semibold">
                    {initialData ? 'Edit' : 'Add'} Subscription
                  </Dialog.Title>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Amount</label>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as SubscriptionCategory })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="Entertainment">Entertainment</option>
                      <option value="Software">Software</option>
                      <option value="Fitness">Fitness</option>
                      <option value="Music">Music</option>
                      <option value="Streaming">Streaming</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Billing Frequency</label>
                    <select
                      value={formData.frequency}
                      onChange={(e) => setFormData({ ...formData, frequency: e.target.value as BillingFrequency })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly</option>
                      <option value="Annually">Annually</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Next Billing Date</label>
                    <input
                      type="date"
                      required
                      value={formData.nextBillingDate}
                      onChange={(e) => setFormData({ ...formData, nextBillingDate: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                    >
                      {initialData ? 'Save Changes' : 'Add Subscription'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}