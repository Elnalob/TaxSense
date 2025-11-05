import React, { useState, useMemo } from 'react';
import Chart from '../components/Chart';

// Mock data for dropdowns
const states = ["Lagos", "Abuja", "Rivers", "Kano", "Ogun", "Other"];
const incomeRanges = [
  { value: 400000, label: "Under ₦800,000" },
  { value: 3000000, label: "₦1,000,000 - ₦5,000,000" },
  { value: 15000000, label: "₦5,000,001 - ₦25,000,000" },
  { value: 50000000, label: "Over ₦25,000,000" },
];
const spendingCategories = ["Low", "Medium", "High"];

/**
 * The Tax Impact Calculator page.
 * Allows users to estimate their tax difference based on the new reform.
 */
const Calculator: React.FC = () => {
  const [income, setIncome] = useState<number>(incomeRanges[0].value);
  const [employmentType, setEmploymentType] = useState('salaried');
  const [state, setState] = useState(states[0]);
  const [spending, setSpending] = useState(spendingCategories[0]);
  const [result, setResult] = useState<{ oldTax: number, newTax: number, difference: number } | null>(null);

  /**
   * MOCK CALCULATION LOGIC
   * This is a simplified, placeholder formula for demonstration purposes.
   * A real implementation would require complex, accurate tax rules.
   */
  const calculateTax = () => {
    // Placeholder old tax calculation (e.g., flat 15% on income above a threshold)
    const oldTaxableIncome = Math.max(0, income - 200000); // Old relief
    const oldTax = oldTaxableIncome * 0.15;

    // Placeholder new tax calculation (more progressive bands)
    let newTax = 0;
    if (income <= 1000000) {
      newTax = income * 0.07;
    } else if (income <= 5000000) {
      newTax = (1000000 * 0.07) + ((income - 1000000) * 0.15);
    } else {
      newTax = (1000000 * 0.07) + (4000000 * 0.15) + ((income - 5000000) * 0.21);
    }
    
    // Placeholder for spending impact (VAT adjustment)
    const spendingImpact = (spending === 'High' ? 0.005 : spending === 'Medium' ? 0.0025 : 0.001) * income;
    newTax += spendingImpact;
    
    // Placeholder for employment type adjustment
    if (employmentType === 'self-employed') {
        newTax *= 1.05; // Slightly higher effective rate due to different deductions
    }

    const difference = newTax - oldTax;
    setResult({ oldTax, newTax, difference });
  };
  
  const chartData = useMemo(() => {
    if (!result) return [{ name: 'Annual Tax', 'Old Tax': 0, 'New Tax': 0 }];
    return [{
      name: 'Annual Tax',
      'Old Tax': Math.round(result.oldTax),
      'New Tax': Math.round(result.newTax),
    }];
  }, [result]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Tax Impact Calculator</h1>
      <p className="text-gray-600 mb-6">Estimate how the 2025 tax reform might affect you. All figures are illustrative.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700">Annual Income</label>
              <select id="income" value={income} onChange={e => setIncome(Number(e.target.value))} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                {incomeRanges.map(range => <option key={range.value} value={range.value}>{range.label}</option>)}
              </select>
            </div>
            <div>
              <span className="block text-sm font-medium text-gray-700">Employment Type</span>
              <div className="mt-2 flex space-x-4">
                <label className="flex items-center"><input type="radio" name="employment" value="salaried" checked={employmentType === 'salaried'} onChange={e => setEmploymentType(e.target.value)} className="focus:ring-primary h-4 w-4 text-primary border-gray-300" /> <span className="ml-2">Salaried</span></label>
                <label className="flex items-center"><input type="radio" name="employment" value="self-employed" checked={employmentType === 'self-employed'} onChange={e => setEmploymentType(e.target.value)} className="focus:ring-primary h-4 w-4 text-primary border-gray-300" /> <span className="ml-2">Self-Employed</span></label>
              </div>
            </div>
             <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State of Residence</label>
              <select id="state" value={state} onChange={e => setState(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                {states.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
             <div>
              <label htmlFor="spending" className="block text-sm font-medium text-gray-700">Typical Monthly Spending</label>
              <select id="spending" value={spending} onChange={e => setSpending(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                {spendingCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <button onClick={calculateTax} className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-green-800 transition-all">
              Calculate Impact
            </button>
          </div>
        </div>

        {/* Output/Result */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
            {result ? (
                <div>
                    <div className="border-b pb-4 mb-4">
                        <h4 className="text-sm font-semibold text-gray-600">Based on your inputs:</h4>
                        <ul className="text-sm text-gray-500 list-disc list-inside">
                            <li>Income: <span className="font-medium">{incomeRanges.find(r => r.value === income)?.label}</span></li>
                            <li>Employment: <span className="font-medium">{employmentType === 'salaried' ? 'Salaried' : 'Self-Employed'}</span></li>
                        </ul>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Your Estimated Annual Impact</h3>
                    <div className={`p-4 rounded-lg text-center mb-4 ${result.difference > 0 ? 'bg-red-100' : 'bg-green-100'}`}>
                        <p className="text-lg font-semibold">{result.difference > 0 ? 'Potential Increase' : 'Potential Savings'}</p>
                        <p className={`text-4xl font-bold ${result.difference > 0 ? 'text-red-600' : 'text-green-600'}`}>
                            ₦{Math.abs(result.difference).toLocaleString()}
                        </p>
                    </div>
                    <Chart data={chartData} />
                </div>
            ) : (
                <div className="text-center text-gray-500">
                    <p>Fill in the form to see your estimated tax impact.</p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
