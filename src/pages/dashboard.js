import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import Router from 'next/router'
import { useEffect } from 'react'

const Dashboard = () => {
    const { logout, user } = useAuth({ middleware: 'auth' /* or 'guest */ })

    useEffect(() => {
        if (!user) Router.push('/login')
    })

    return (
        <>
            {user ? (
                <AppLayout
                    header={
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Dashboard
                        </h2>
                    }>
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="p-6 bg-white border-b border-gray-200">
                                    You're logged in!
                                </div>
                            </div>
                        </div>
                    </div>
                </AppLayout>
            ) : (
                <></>
            )}
        </>
    )
}

export default Dashboard
