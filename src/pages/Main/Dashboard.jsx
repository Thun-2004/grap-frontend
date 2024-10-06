// @ts-check

import React from 'react';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';

//sidebar, header, link to other pages
/**
 *
 * @param {{
 *  children: React.ReactNode,
 *  header: boolean
 * }}  props
 * @returns {React.ReactNode}
 */
const Dashboard = ({ children, header }) => {
    return (
        <div className="flex h-svh w-full overflow-y-auto ">
            <div
                className="
                    sticky left-0 top-0 z-10 hidden h-svh max-h-svh p-4 md:block
                "
            >
                <SideBar />
            </div>

            <div className="flex w-0 grow flex-col">
                <div className="grow">
                    {header && (
                        <div className="sticky top-0 z-10 md:-ml-4">
                            <Header />
                        </div>
                    )}

                    <div className="p-2 md:pl-0 md:pr-4">{children}</div>
                </div>
                <div className="sticky bottom-0 md:hidden">
                    <BottomBar />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
