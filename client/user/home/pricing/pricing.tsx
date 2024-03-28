const PRICING = [
  {
    plan: 'Personal',
    amount: '12.99',
    for: 'user',
    features: [
      'Free licensed icons', 'Fast and free standard shipping', 'No credit card required', 'Friendly supports'
    ]
  }
];

export function Pricing() {
  return (
    <section className='price-clip relative mt-14 bg-[#F5F5F5] py-5'>
      <div className='grid grid-cols-[1fr_1fr] place-items-center gap-10'>

        <h2 className='max-w-xs text-2xl font-bold text-gray-700'>Free and easy way to
          Simple pricing for everyone
        </h2>
        <p className='my-2 mb-5 max-w-sm'>Lorem ipsum det, cowec tetur duis nec fringi det,
          Choose a plan and get started
        </p>

      </div>

    </section>
  );
}
