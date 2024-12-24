import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AddMemberModal, MemberFormData } from '@/components/modals/AddMemberModal';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  avatar: string;
}

export default function Team() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([
    {
      id: 1,
      name: 'John Doe',
      role: 'Admin',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Manager',
      email: 'jane@example.com',
      phone: '+1 234 567 891',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
  ]);

  const handleAddMember = (data: MemberFormData) => {
    const newMember: TeamMember = {
      id: Date.now(),
      ...data,
      avatar: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000)}?w=100&h=100&fit=crop`,
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Team Members</h2>
        <Button 
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-600"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Member
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="flex items-center gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <span className="text-sm text-blue-400">{member.role}</span>
              </div>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AddMemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMember}
      />
    </motion.div>
  );
}