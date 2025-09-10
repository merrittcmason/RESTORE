import React, { useState, useEffect } from 'react';
import { X, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SiteUpdate } from '../../types';

// Mock data - in production this would come from your database or CMS
const mockUpdates: SiteUpdate[] = [
  {
    id: '1',
    message: 'ReStore Holiday Hours: Closed December 24-26. Regular hours resume December 27.',
    type: 'info',
    startDate: '2024-12-20',
    endDate: '2024-12-27',
    active: true,
  },
];

export default function UpdatesBanner() {
  const [updates, setUpdates] = useState<SiteUpdate[]>([]);
  const [dismissedUpdates, setDismissedUpdates] = useState<string[]>(() => {
    const stored = localStorage.getItem('dismissedUpdates');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    // Filter active updates that haven't been dismissed
    const activeUpdates = mockUpdates.filter(update => {
      const now = new Date();
      const startDate = new Date(update.startDate);
      const endDate = new Date(update.endDate);
      
      return update.active && 
             now >= startDate && 
             now <= endDate && 
             !dismissedUpdates.includes(update.id);
    });
    
    setUpdates(activeUpdates);
  }, [dismissedUpdates]);

  const dismissUpdate = (updateId: string) => {
    const newDismissed = [...dismissedUpdates, updateId];
    setDismissedUpdates(newDismissed);
    localStorage.setItem('dismissedUpdates', JSON.stringify(newDismissed));
  };

  const getIcon = (type: SiteUpdate['type']) => {
    switch (type) {
      case 'warning':
        return AlertTriangle;
      case 'success':
        return CheckCircle;
      default:
        return Info;
    }
  };

  const getColors = (type: SiteUpdate['type']) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800';
    }
  };

  if (updates.length === 0) return null;

  return (
    <AnimatePresence>
      {updates.map((update) => {
        const Icon = getIcon(update.type);
        const colors = getColors(update.type);
        
        return (
          <motion.div
            key={update.id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`border-b ${colors}`}
          >
            <div className="container-max">
              <div className="flex items-center justify-between py-3 px-4">
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-medium">{update.message}</p>
                </div>
                <button
                  onClick={() => dismissUpdate(update.id)}
                  className="flex-shrink-0 p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-current"
                  aria-label="Dismiss update"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  );
}