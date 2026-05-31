import React, { useState } from 'react';
import { Wallet, CreditCard, Gift, Tag, Users, ChevronRight, TrendingUp, Star } from 'lucide-react';
import { PRICING } from '../../../src/data/movies';

export default function WalletPage() {
  const [region, setRegion] = useState('NG');
  const p = PRICING[region];

  const TRANSACTIONS = [
    { id: 1, type: 'sub', desc: 'Premium Monthly', amount: `-${p.currency}${p.premium}`, date: 'May 1', icon: '⭐' },
    { id: 2, type: 'reward', desc: 'Referral Reward', amount: '+50 pts', date: 'Apr 28', icon: '🎁' },
    { id: 3, type: 'gift', desc: 'Movie Gift Sent', amount: `-${p.currency}800`, date: 'Apr 25', icon: '🎬' },
    { id: 4, type: 'coupon', desc: 'Coupon Redeemed', amount: `-${p.currency}0`, date: 'Apr 20', icon: '🏷️' },
  ];

  return (
    <div className="min-h-screen bg-pupa-bg pt-16 pb-24 page-enter">
      <div className="px-5 pt-4">
        <h1 className="font-display text-2xl font-semibold text-white mb-6">Wallet</h1>

        {/* Balance card */}
        <div
          className="relative rounded-2xl p-5 mb-5 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #064e2a 0%, #0d3b23 50%, #041b11 100%)',
            border: '1px solid rgba(22,163,74,0.25)',
          }}
        >
          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-yellow-500/5" />
          <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full bg-emerald-500/5" />

          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-400 text-xs font-body mb-1">Available Balance</p>
              <p className="font-display text-3xl font-semibold text-white">
                {p.currency}12,400
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
              <Wallet size={18} className="text-yellow-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 bg-emerald-500/15 px-3 py-1.5 rounded-full">
              <Star size={11} className="text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 text-xs font-mono font-medium">240 Points</span>
            </div>
            <div className="text-gray-500 text-xs font-body">• Earn more with referrals</div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: CreditCard, label: 'Top Up', color: '#16a34a' },
            { icon: Gift, label: 'Gift Movie', color: '#facc15' },
            { icon: Tag, label: 'Coupons', color: '#a78bfa' },
          ].map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              className="glass-dark rounded-xl py-4 flex flex-col items-center gap-2 hover:border-emerald-700/50 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `${color}20` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <span className="text-gray-300 text-xs font-body">{label}</span>
            </button>
          ))}
        </div>

        {/* Referral section */}
        <div
          className="rounded-2xl p-4 mb-6"
          style={{
            background: 'rgba(250,204,21,0.05)',
            border: '1px solid rgba(250,204,21,0.2)',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-yellow-500/15 flex items-center justify-center">
              <Users size={18} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold font-body">Refer & Earn</p>
              <p className="text-gray-400 text-xs font-body">Invite 10 friends = 10 points</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-3">
            <div className="flex justify-between mb-1">
              <span className="text-gray-400 text-xs">7 / 10 invited</span>
              <span className="text-yellow-400 text-xs font-mono">70%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: '70%',
                  background: 'linear-gradient(90deg, #16a34a, #facc15)',
                }}
              />
            </div>
          </div>

          <button className="w-full py-2.5 rounded-xl bg-yellow-500/15 border border-yellow-500/30 text-yellow-400 text-sm font-medium hover:bg-yellow-500/25 transition-colors">
            Share Referral Link
          </button>
        </div>

        {/* Subscription plans */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-body font-semibold text-white">Plans</h3>
            <div className="flex gap-1">
              {Object.keys(PRICING).map(r => (
                <button
                  key={r}
                  onClick={() => setRegion(r)}
                  className="px-2 py-0.5 rounded text-[10px] font-mono transition-all"
                  style={{
                    background: region === r ? '#16a34a' : 'rgba(255,255,255,0.05)',
                    color: region === r ? 'white' : '#6b7280',
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {[
              { name: 'Basic', price: p.basic, features: ['HD Streaming', '1 Screen', 'Limited Downloads'] },
              { name: 'Premium', price: p.premium, features: ['4K + HDR', '2 Screens', 'Early Access', 'Unlimited Downloads'], highlight: true },
              { name: 'Family', price: p.family, features: ['4K + HDR', '4 Screens', 'All Premium Features', 'Family Sharing'] },
            ].map(plan => (
              <div
                key={plan.name}
                className="rounded-xl p-4 flex items-center justify-between"
                style={{
                  background: plan.highlight
                    ? 'linear-gradient(135deg, rgba(22,163,74,0.15), rgba(4,27,17,0.8))'
                    : 'rgba(255,255,255,0.03)',
                  border: plan.highlight
                    ? '1px solid rgba(22,163,74,0.4)'
                    : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white text-sm font-semibold font-body">{plan.name}</p>
                    {plan.highlight && (
                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-[11px] font-body">{plan.features.slice(0, 2).join(' • ')}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-display font-semibold">
                    {p.currency}{plan.price}
                  </p>
                  <p className="text-gray-500 text-[10px]">/month</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent transactions */}
        <div>
          <h3 className="font-body font-semibold text-white mb-3">Recent Activity</h3>
          <div className="space-y-3">
            {TRANSACTIONS.map(t => (
              <div key={t.id} className="flex items-center gap-3 py-2">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg">
                  {t.icon}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-body font-medium">{t.desc}</p>
                  <p className="text-gray-500 text-xs">{t.date}</p>
                </div>
                <p
                  className="text-sm font-mono font-medium"
                  style={{ color: t.amount.startsWith('+') ? '#22c55e' : '#f3f4f6' }}
                >
                  {t.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
