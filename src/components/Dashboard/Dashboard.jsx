import React from 'react'
import Card from '../Card'
import { FaBox, FaCog, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { LiaNotesMedicalSolid } from 'react-icons/lia'
import { FcCustomerSupport } from 'react-icons/fc'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { AiOutlineSchedule } from 'react-icons/ai'

const Dashboard = () => {
    return (
        <div className='grow p-8'>
            <h2 className='text-2xl mb-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                <Card icon={<FaUsers />} title="Pacientes" value="140" />
                <Card icon={<LiaNotesMedicalSolid />} title="Consultas" value="120" />
                <Card icon={<AiOutlineSchedule />} title="Atendimentos Agendados" value="30" />
                <Card icon={<MdOutlineSupportAgent />} title="Atendimentos Realizados" value="11" />
            </div>
        </div>
    )
}

export default Dashboard