import React from "react";
import { motion } from "framer-motion";
import {
  Wallet,
  BadgePercent,
  Clock,
  FileCheck,
  ScrollText,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center"
        >
          <div className="flex items-center gap-3">
            <img
              src="/beefinancelogo.jpeg"
              alt="BEE Finance Logo"
              className="w-10 h-10 object-cover rounded-lg"
            />
            <span className="text-2xl font-bold">BEE Finance</span>
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              ZERO-INTEREST LOANS FOR STUDENTS & INDIVIDUALS IN NEED!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get Instant Approval In 3 Minutes
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              APPLY NOW
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              alt="Students studying"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">ABOUT US</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At Bee Finance, we believe financial hurdles should never stop you
              from achieving your dreams. That's why we provide hassle-free,
              collateral-free personal loans with zero interest— helping
              students and individuals access the support they need.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            KEY FEATURES
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg"
            >
              <Wallet className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  No Collateral Required
                </h3>
                <p className="text-gray-600">
                  Borrowers are not required to pledge assets for loan approval.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg"
            >
              <BadgePercent className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Zero Interest Rate
                </h3>
                <p className="text-gray-600">
                  We do not charge interest on the loan amount.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg"
            >
              <Clock className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Quick & Easy Application Process
                </h3>
                <p className="text-gray-600">
                  Simple eligibility criteria for fast approvals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg"
            >
              <ScrollText className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Repayment Plans
                </h3>
                <p className="text-gray-600">
                  Designed to ease financial burden with manageable
                  installments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg"
            >
              <FileCheck className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Minimal Convenience & Service Charge
                </h3>
                <p className="text-gray-600">
                  Transparent fee is applied to cover operational costs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Who Can Apply Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              WHO CAN APPLY?
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* <h3 className="text-xl font-semibold mb-2">Students</h3> */}
                <p className="text-gray-700">
                  TEAM BEE-FINANCIAL AIMS TO SUPPORT INDIVIDUALS WHO ARE FACING
                  TEMPORARY FINANCIAL HARDSHIP AND DIFFICULTIES.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {/* <h3 className="text-xl font-semibold mb-2">
                  Needy Individuals
                </h3> */}
                <p className="text-gray-700">
                  PEOPLE STRUGGLING WITH TEMPORARY FINANCIAL SETBACKS AND
                  REQUIRING SHORT-TERM FINANCIAL AID.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                Our mission is to empower and uplift individuals by offering
                financial aid without the burden of high-interest loans,
                fostering a more inclusive and supportive financial ecosystem.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Apply now and get your loan approved in minutes!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
            >
              Apply for a Loan
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400">FOUNDED BY</p>
              <p className="font-semibold">YAN JUNGIO</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
