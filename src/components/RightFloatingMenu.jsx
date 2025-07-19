import React, { useState } from 'react';
import { Button } from './ui/button';
import { 
  Plus, 
  X, 
  FileText, 
  Download, 
  Share2, 
  Settings,
  ChevronRight
} from 'lucide-react';

const RightFloatingMenu = ({ isMobile }) => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    {
      id: 'action1',
      label: 'Document',
      icon: FileText,
      onClick: () => console.log('Document action clicked'),
    },
    {
      id: 'action2',
      label: 'Export',
      icon: Download,
      onClick: () => console.log('Export action clicked'),
    },
    {
      id: 'action3',
      label: 'Share',
      icon: Share2,
      onClick: () => console.log('Share action clicked'),
    },
    {
      id: 'action4',
      label: 'Options',
      icon: Settings,
      onClick: () => console.log('Options action clicked'),
    },
  ];

  return (
    <>
      {/* Floating Action Button Container */}
      <div className={`fixed ${
        isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'
      } z-50`}>
        {/* Expanded Menu Items */}
        <div className={`absolute bottom-16 right-0 transition-all duration-300 ease-out ${
          expanded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <div className="flex flex-col items-end space-y-3">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center gap-3 transition-all duration-300 ease-out ${
                  expanded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
                style={{
                  transitionDelay: expanded ? `${index * 50}ms` : '0ms'
                }}
              >
                {/* Label */}
                <span className="bg-gray-900 dark:bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap">
                  {item.label}
                </span>
                
                {/* Button */}
                <Button
                  onClick={item.onClick}
                  size="icon"
                  variant="outline"
                  className="h-12 w-12 rounded-full shadow-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700"
                >
                  <item.icon className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Main FAB */}
        <Button
          onClick={() => setExpanded(!expanded)}
          size="icon"
          className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
            expanded 
              ? 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600' 
              : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
          }`}
        >
          <div className={`transition-transform duration-300 ${
            expanded ? 'rotate-45' : 'rotate-0'
          }`}>
            {expanded ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
          </div>
        </Button>
      </div>

      {/* Backdrop */}
      {expanded && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setExpanded(false)}
        />
      )}
    </>
  );
};

export default RightFloatingMenu;