// import React from 'react';
// import { BsCurrencyDollar } from 'react-icons/bs';
// import { GoPrimitiveDot } from 'react-icons/go';
// import { IoIosMore } from 'react-icons/io';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
// import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';
// import product9 from '../data/product9.jpg';

// const DropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//   </div>
// );

// const Ecommerce = () => {
//   const { currentColor, currentMode } = useStateContext();

//   return (
//     <div className="mt-24">
//       <div className="flex flex-wrap lg:flex-nowrap justify-center ">
//         <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="font-bold text-gray-400">Earnings</p>
//               <p className="text-2xl">$63,448.78</p>
//             </div>
//             <button
//               type="button"
//               style={{ backgroundColor: currentColor }}
//               className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
//             >
//               <BsCurrencyDollar />
//             </button>
//           </div>
//           <div className="mt-6">
//             <Button
//               color="white"
//               bgColor={currentColor}
//               text="Download"
//               borderRadius="10px"
//             />
//           </div>
//         </div>
//         <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
//           {earningData.map((item) => (
//             <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
//               <button
//                 type="button"
//                 style={{ color: item.iconColor, backgroundColor: item.iconBg }}
//                 className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
//               >
//                 {item.icon}
//               </button>
//               <p className="mt-3">
//                 <span className="text-lg font-semibold">{item.amount}</span>
//                 <span className={`text-sm text-${item.pcColor} ml-2`}>
//                   {item.percentage}
//                 </span>
//               </p>
//               <p className="text-sm text-gray-400  mt-1">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-10 flex-wrap justify-center">
//         <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
//           <div className="flex justify-between">
//             <p className="font-semibold text-xl">Revenue Updates</p>
//             <div className="flex items-center gap-4">
//               <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
//                 <span>
//                   <GoPrimitiveDot />
//                 </span>
//                 <span>Expense</span>
//               </p>
//               <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
//                 <span>
//                   <GoPrimitiveDot />
//                 </span>
//                 <span>Budget</span>
//               </p>
//             </div>
//           </div>
//           <div className="mt-10 flex gap-10 flex-wrap justify-center">
//             <div className=" border-r-1 border-color m-4 pr-10">
//               <div>
//                 <p>
//                   <span className="text-3xl font-semibold">$93,438</span>
//                   <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
//                     23%
//                   </span>
//                 </p>
//                 <p className="text-gray-500 mt-1">Budget</p>
//               </div>
//               <div className="mt-8">
//                 <p className="text-3xl font-semibold">$48,487</p>

//                 <p className="text-gray-500 mt-1">Expense</p>
//               </div>

//               <div className="mt-5">
//                 <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
//               </div>
//               <div className="mt-10">
//                 <Button
//                   color="white"
//                   bgColor={currentColor}
//                   text="Download Report"
//                   borderRadius="10px"
//                 />
//               </div>
//             </div>
//             <div>
//               <Stacked currentMode={currentMode} width="320px" height="360px" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div
//             className=" rounded-2xl md:w-400 p-4 m-3"
//             style={{ backgroundColor: currentColor }}
//           >
//             <div className="flex justify-between items-center ">
//               <p className="font-semibold text-white text-2xl">Earnings</p>

//               <div>
//                 <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
//                 <p className="text-gray-200">Monthly revenue</p>
//               </div>
//             </div>

//             <div className="mt-4">
//               <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
//             </div>
//           </div>

//           <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10">
//             <div>
//               <p className="text-2xl font-semibold ">$43,246</p>
//               <p className="text-gray-400">Yearly sales</p>
//             </div>

//             <div className="w-40">
//               <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-10 m-4 flex-wrap justify-center">
//         <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
//           <div className="flex justify-between items-center gap-2">
//             <p className="text-xl font-semibold">Recent Transactions</p>
//             <DropDown currentMode={currentMode} />
//           </div>
//           <div className="mt-10 w-72 md:w-400">
//             {recentTransactions.map((item) => (
//               <div key={item.title} className="flex justify-between mt-4">
//                 <div className="flex gap-4">
//                   <button
//                     type="button"
//                     style={{
//                       color: item.iconColor,
//                       backgroundColor: item.iconBg,
//                     }}
//                     className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
//                   >
//                     {item.icon}
//                   </button>
//                   <div>
//                     <p className="text-md font-semibold">{item.title}</p>
//                     <p className="text-sm text-gray-400">{item.desc}</p>
//                   </div>
//                 </div>
//                 <p className={`text-${item.pcColor}`}>{item.amount}</p>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between items-center mt-5 border-t-1 border-color">
//             <div className="mt-3">
//               <Button
//                 color="white"
//                 bgColor={currentColor}
//                 text="Add"
//                 borderRadius="10px"
//               />
//             </div>

//             <p className="text-gray-400 text-sm">36 Recent Transactions</p>
//           </div>
//         </div>
//         <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
//           <div className="flex justify-between items-center gap-2 mb-10">
//             <p className="text-xl font-semibold">Sales Overview</p>
//             <DropDown currentMode={currentMode} />
//           </div>
//           <div className="md:w-full overflow-auto">
//             <LineChart />
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-center">
//         <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
//           <div className="flex justify-between">
//             <p className="text-xl font-semibold">Weekly Stats</p>
//             <button type="button" className="text-xl font-semibold text-gray-500">
//               <IoIosMore />
//             </button>
//           </div>

//           <div className="mt-10 ">
//             {weeklyStats.map((item) => (
//               <div key={item.title} className="flex justify-between mt-4 w-full">
//                 <div className="flex gap-4">
//                   <button
//                     type="button"
//                     style={{ background: item.iconBg }}
//                     className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
//                   >
//                     {item.icon}
//                   </button>
//                   <div>
//                     <p className="text-md font-semibold">{item.title}</p>
//                     <p className="text-sm text-gray-400">{item.desc}</p>
//                   </div>
//                 </div>

//                 <p className={`text-${item.pcColor}`}>{item.amount}</p>
//               </div>
//             ))}
//             <div className="mt-4">
//               <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
//             </div>
//           </div>

//         </div>
//         <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
//           <div className="flex justify-between">
//             <p className="text-xl font-semibold">MedicalPro Branding</p>
//             <button type="button" className="text-xl font-semibold text-gray-400">
//               <IoIosMore />
//             </button>
//           </div>
//           <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
//             16 APR, 2021
//           </p>

//           <div className="flex gap-4 border-b-1 border-color mt-6">
//             {medicalproBranding.data.map((item) => (
//               <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
//                 <p className="text-xs text-gray-400">{item.title}</p>
//                 <p className="text-sm">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//           <div className="border-b-1 border-color pb-4 mt-2">
//             <p className="text-md font-semibold mb-2">Teams</p>

//             <div className="flex gap-4">
//               {medicalproBranding.teams.map((item) => (
//                 <p
//                   key={item.name}
//                   style={{ background: item.color }}
//                   className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
//                 >
//                   {item.name}
//                 </p>
//               ))}
//             </div>
//           </div>
//           <div className="mt-2">
//             <p className="text-md font-semibold mb-2">Leaders</p>
//             <div className="flex gap-4">
//               {medicalproBranding.leaders.map((item, index) => (
//                 <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-5 border-t-1 border-color">
//             <div className="mt-3">
//               <Button
//                 color="white"
//                 bgColor={currentColor}
//                 text="Add"
//                 borderRadius="10px"
//               />
//             </div>

//             <p className="text-gray-400 text-sm">36 Recent Transactions</p>
//           </div>
//         </div>
//         <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
//           <div className="flex justify-between">
//             <p className="text-xl font-semibold">Daily Activities</p>
//             <button type="button" className="text-xl font-semibold text-gray-500">
//               <IoIosMore />
//             </button>
//           </div>
//           <div className="mt-10">
//             <img
//               className="md:w-96 h-50 "
//               src={product9}
//               alt=""
//             />
//             <div className="mt-8">
//               <p className="font-semibold text-lg">React 18 coming soon!</p>
//               <p className="text-gray-400 ">By Johnathan Doe</p>
//               <p className="mt-8 text-sm text-gray-400">
//                 This will be the small description for the news you have shown
//                 here. There could be some great info.
//               </p>
//               <div className="mt-3">
//                 <Button
//                   color="white"
//                   bgColor={currentColor}
//                   text="Read More"
//                   borderRadius="10px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ecommerce;
"use client"

import { useState, useRef, useEffect } from "react"
import React from "react"

// UI Components
function Card({ className = "", children, ...props }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ className = "", children, ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardTitle({ className = "", children, ...props }) {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  )
}

function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

function Button({ className = "", variant = "default", size = "default", children, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

function Badge({ className = "", variant = "default", children, ...props }) {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  )
}

function Avatar({ className = "", children, ...props }) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props}>
      {children}
    </div>
  )
}

function AvatarImage({ className = "", src, alt, ...props }) {
  return (
    <img className={`aspect-square h-full w-full ${className}`} src={src || "/placeholder.svg"} alt={alt} {...props} />
  )
}

function AvatarFallback({ className = "", children, ...props }) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`} {...props}>
      {children}
    </div>
  )
}

function Select({ value, onValueChange, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || "")
  const selectRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleValueChange = (newValue) => {
    setSelectedValue(newValue)
    onValueChange?.(newValue)
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className="relative">
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
            isOpen,
            selectedValue,
          })
        }
        if (child.type === SelectContent) {
          return React.cloneElement(child, {
            isOpen,
            onValueChange: handleValueChange,
          })
        }
        return child
      })}
    </div>
  )
}

function SelectTrigger({ className = "", children, onClick, isOpen, selectedValue, ...props }) {
  return (
    <button
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      <svg
        className={`h-4 w-4 opacity-50 transition-transform ${isOpen ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

function SelectValue({ placeholder = "Select...", selectedValue }) {
  return <span>{selectedValue || placeholder}</span>
}

function SelectContent({ className = "", children, isOpen, onValueChange, ...props }) {
  if (!isOpen) return null

  return (
    <div
      className={`absolute top-full z-50 mt-1 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (child.type === SelectItem) {
          return React.cloneElement(child, { onValueChange })
        }
        return child
      })}
    </div>
  )
}

function SelectItem({ className = "", children, value, onValueChange, ...props }) {
  return (
    <div
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
      onClick={() => onValueChange?.(value)}
      {...props}
    >
      {children}
    </div>
  )
}

// Icon Components
const DollarSign = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
    />
  </svg>
)

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
)

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
    />
  </svg>
)

const CreditCard = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
)

const Download = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)

const MoreHorizontal = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
    />
  </svg>
)

const ArrowUpRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
)

const ArrowDownRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7l10 10M17 17H7M17 17V7" />
  </svg>
)

const Activity = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Zap = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

// Main Dashboard Component
export function EcommerceDashboard() {
  const [timeFilter, setTimeFilter] = useState("7d")

  const earningData = [
    {
      title: "Customers",
      amount: "39,354",
      percentage: "+8.5%",
      trend: "up",
      icon: Users,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      title: "Products",
      amount: "4,396",
      percentage: "+1.3%",
      trend: "up",
      icon: ShoppingCart,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      title: "Sales",
      amount: "423,39",
      percentage: "-0.5%",
      trend: "down",
      icon: CreditCard,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-100",
    },
  ]

  const recentTransactions = [
    {
      title: "Nike React Phantom",
      desc: "Bill payment",
      amount: "-$325",
      icon: ShoppingCart,
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
      trend: "down",
    },
    {
      title: "Stripe Payment",
      desc: "Salary payment",
      amount: "+$1,325",
      icon: CreditCard,
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      trend: "up",
    },
    {
      title: "Electric Bill",
      desc: "Utility payment",
      amount: "-$129",
      icon: Zap,
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
      trend: "down",
    },
    {
      title: "Netflix Subscription",
      desc: "Entertainment",
      amount: "-$15.99",
      icon: Activity,
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      trend: "down",
    },
  ]

  const weeklyStats = [
    {
      title: "Top Sales",
      desc: "Johnathan Doe",
      amount: "$5,569",
      icon: Target,
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Best Seller",
      desc: "MaterialPro Admin",
      amount: "$2,659",
      icon: TrendingUp,
      iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      title: "Most Comments",
      desc: "Ample Admin",
      amount: "$1,943",
      icon: Users,
      iconBg: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
  ]

  const teamMembers = [
    { name: "React", color: "bg-blue-500" },
    { name: "Angular", color: "bg-red-500" },
    { name: "Vue", color: "bg-green-500" },
  ]

  const leaders = [
    { image: "/placeholder.svg?height=32&width=32", name: "John" },
    { image: "/placeholder.svg?height=32&width=32", name: "Jane" },
    { image: "/placeholder.svg?height=32&width=32", name: "Bob" },
    { image: "/placeholder.svg?height=32&width=32", name: "Alice" },
  ]

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50">
      {/* Header Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Earnings Card */}
        <Card className="lg:col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 p-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-blue-100 text-sm font-medium">Earnings</p>
                <p className="text-3xl font-bold">$63,448.78</p>
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <DollarSign className="h-6 w-6" />
              </div>
            </div>
            <Button variant="secondary" className="w-full bg-white text-blue-600 hover:bg-gray-100">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </CardContent>
        </Card>

        {/* Metric Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
          {earningData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4 mt-2 ">
                  <div className={`p-3 rounded-full ${item.iconBg}`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <Badge variant={item.trend === "up" ? "default" : "destructive"} className="text-xs">
                    {item.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 mr-1" />
                    )}
                    {item.percentage}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold">{item.amount}</p>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Revenue and Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Revenue Updates */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Revenue Updates</CardTitle>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-500">Expense</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-500">Budget</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-bold">$93,438</span>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">23%</Badge>
                  </div>
                  <p className="text-sm text-gray-500">Budget</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">$48,487</p>
                  <p className="text-sm text-gray-500">Expense</p>
                </div>
                <div className="h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-end p-2">
                  <div className="w-full h-full bg-gradient-to-t from-blue-500 to-purple-500 rounded opacity-60"></div>
                </div>
                <Button className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Activity className="h-12 w-12 mx-auto mb-2" />
                  <p>Stacked Chart Placeholder</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Side Cards */}
        <div className="space-y-6">
          {/* Earnings Card */}
          <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 p-4">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">Earnings</h3>
                <div className="text-right">
                  <p className="text-2xl font-bold">$63,448.78</p>
                  <p className="text-green-100 text-sm">Monthly revenue</p>
                </div>
              </div>
              <div className="h-16 bg-white/20 rounded-lg flex items-end p-2">
                <div className="w-full h-full bg-gradient-to-t from-white/40 to-white/60 rounded"></div>
              </div>
            </CardContent>
          </Card>

          {/* Yearly Sales */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">$43,246</p>
                  <p className="text-sm text-gray-500">Yearly sales</p>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Transactions and Analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Transactions</CardTitle>
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue selectedValue={timeFilter} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${transaction.iconBg}`}>
                      <transaction.icon className={`h-5 w-5 ${transaction.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.title}</p>
                      <p className="text-sm text-gray-500">{transaction.desc}</p>
                    </div>
                  </div>
                  <span className={`font-semibold ${transaction.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t">
              <Button>Add Transaction</Button>
              <p className="text-sm text-gray-500">36 Recent Transactions</p>
            </div>
          </CardContent>
        </Card>

        {/* Sales Overview */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Sales Overview</CardTitle>
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue selectedValue={timeFilter} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">7 Days</SelectItem>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <TrendingUp className="h-12 w-12 mx-auto mb-2" />
                <p>Line Chart Placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Stats */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Weekly Stats</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {weeklyStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${stat.iconBg}`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">{stat.title}</p>
                      <p className="text-sm text-gray-500">{stat.desc}</p>
                    </div>
                  </div>
                  <span className="font-semibold text-green-600">{stat.amount}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
          </CardContent>
        </Card>

        {/* Team Branding */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>MedicalPro Branding</CardTitle>
              <Button variant="ghost" size="icon" >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">16 APR, 2021</Badge>

            <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b">
              <div>
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-semibold">$24.5k</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Expense</p>
                <p className="font-semibold">$12.4k</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Progress</p>
                <p className="font-semibold">78%</p>
              </div>
            </div>

            <div className="mb-4 pb-4 border-b">
              <p className="font-semibold mb-2">Teams</p>
              <div className="flex gap-2">
                {teamMembers.map((team, index) => (
                  <Badge key={index} className={`${team.color} text-white hover:${team.color}`}>
                    {team.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-semibold mb-2">Leaders</p>
              <div className="flex gap-2">
                {leaders.map((leader, index) => (
                  <Avatar key={index} className="h-8 w-8">
                    <AvatarImage src={leader.image || "/placeholder.svg"} alt={leader.name} />
                    <AvatarFallback>{leader.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <Button className="bg-green-600"> Add</Button>
              <p className="text-sm text-gray-500">36 Recent Transactions</p>
            </div>
          </CardContent>
        </Card>

        {/* Daily Activities */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Daily Activities</CardTitle>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="React 18 News"
                className="w-full h-32 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg">React 18 coming soon!</h3>
                <p className="text-sm text-gray-500">By Johnathan Doe</p>
                <p className="text-sm text-gray-500 mt-2">
                  This will be the small description for the news you have shown here. There could be some great info.
                </p>
                <Button className="mt-4 w-full bg-green-600">Read More</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EcommerceDashboard
