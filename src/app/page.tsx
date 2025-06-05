import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ArrowRight, Globe, Shield, Sparkles, Wallet, Zap } from 'lucide-react'

import Link from 'next/link'

import { Button } from '@/shared/ui/kit/button'

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 animate-pulse rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 animate-pulse rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter delay-1000"></div>
        <div className="absolute top-40 left-1/2 h-80 w-80 animate-pulse rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter delay-500"></div>
      </div>

      {/* Header - Clean and Modern */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          {/* Simple Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 group-hover:scale-110">
              <Wallet className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-xl font-bold text-transparent">
              CryptoCoffee
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {['About', 'Features', 'Support', 'Creators', 'Donors'].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group relative font-medium text-white/80 transition-all duration-300 hover:scale-105 hover:text-white"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ),
            )}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center space-x-3">
            <Button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-blue-500 hover:shadow-purple-500/25">
              <Sparkles className="mr-2 h-4 w-4" />
              Donate Now
            </Button>
            {/* Wallet */}
            <ConnectButton label="Connect wallet" />
          </div>
        </div>
      </header>

      {/* Hero Section - Futuristic and Amazing */}
      <section className="relative z-10 container mx-auto px-4 py-20 lg:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Logo with Strike-through Effect */}
            <div className="relative mb-12">
              <h1 className="text-6xl leading-none font-black lg:text-8xl">
                <span className="text-white">BUY ME</span>
                <br />
                <span className="relative text-white">
                  COFFEE
                  <div className="absolute top-1/2 left-0 h-3 w-full -rotate-3 transform bg-gradient-to-r from-purple-500 to-pink-500 opacity-90"></div>
                  <div className="absolute top-1/2 left-0 h-1 w-full -rotate-3 transform bg-gradient-to-r from-purple-300 to-pink-300"></div>
                </span>
              </h1>
              <div className="absolute -right-8 bottom-4">
                <span className="inline-block rotate-6 transform animate-pulse bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-6xl font-black text-transparent lg:text-8xl">
                  CRYPTO
                </span>
                <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-30 blur-xl"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="max-w-lg text-xl leading-relaxed text-white/90">
                The revolutionary platform that transforms how creators receive
                support.
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold text-transparent">
                  {' '}
                  Powered by blockchain technology
                </span>
                , designed for the future.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="group rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all duration-500 hover:scale-105 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 hover:shadow-purple-500/50"
                >
                  <Zap className="mr-2 h-5 w-5 group-hover:animate-spin" />
                  Launch Your Page
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white/30 bg-white/5 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-400/50 hover:bg-white/10"
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Explore Creators
                </Button>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: 'Secure',
                  desc: 'Blockchain protected',
                  color: 'from-green-400 to-emerald-500',
                },
                {
                  icon: Zap,
                  title: 'Instant',
                  desc: 'Lightning fast',
                  color: 'from-yellow-400 to-orange-500',
                },
                {
                  icon: Globe,
                  title: 'Global',
                  desc: 'Worldwide access',
                  color: 'from-blue-400 to-purple-500',
                },
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10">
                    <div
                      className={`h-12 w-12 bg-gradient-to-r ${feature.color} mb-3 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-1 font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/70">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Futuristic Visualization */}
          <div className="relative">
            <div className="relative">
              {/* Main Card */}
              <div className="rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="space-y-6">
                  {/* Crypto Wallet Interface */}
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-white/70">Your Wallet</span>
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                    </div>
                    <div className="mb-2 text-2xl font-bold text-white">
                      $12,847.92
                    </div>
                    <div className="text-sm text-green-400">
                      +24.5% this month
                    </div>
                  </div>

                  {/* Transaction List */}
                  <div className="space-y-3">
                    {[
                      {
                        name: 'Alex Creator',
                        amount: '0.05 ETH',
                        time: '2m ago',
                        avatar: '🎨',
                      },
                      {
                        name: 'Sarah Dev',
                        amount: '0.12 BTC',
                        time: '1h ago',
                        avatar: '💻',
                      },
                      {
                        name: 'Mike Music',
                        amount: '50 USDC',
                        time: '3h ago',
                        avatar: '🎵',
                      },
                    ].map((tx, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-xl bg-black/10 p-3 transition-all duration-300 hover:bg-black/20"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-lg">
                            {tx.avatar}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">
                              {tx.name}
                            </div>
                            <div className="text-xs text-white/50">
                              {tx.time}
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-bold text-green-400">
                          +{tx.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 animate-bounce rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-xl">
                <div className="text-sm font-bold text-white">
                  New Donation!
                </div>
                <div className="text-xs text-white/80">+0.08 ETH</div>
              </div>

              <div className="absolute -bottom-6 -left-6 animate-pulse rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-xl">
                <div className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5 text-white" />
                  <div>
                    <div className="text-sm font-bold text-white">
                      Connected
                    </div>
                    <div className="text-xs text-white/80">MetaMask</div>
                  </div>
                </div>
              </div>

              {/* Glow Effects */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
