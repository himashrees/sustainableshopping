import React from "react";
import { FaHandHoldingUsd, FaSeedling, FaHeartbeat, FaGraduationCap, FaFemale, FaTint, FaBolt, FaMoneyBillWave, FaIndustry, FaEquals, FaCity, FaRecycle, FaCloud, FaFish, FaTree, FaBalanceScale, FaHandsHelping } from "react-icons/fa";
import "./SustainableDevelopmentGoalsPage.css";

function SustainableDevelopmentGoalsPage() {
  return (
    <div className="sdg-page">
      <h1>United Nations Sustainable Development Goals (SDGs)</h1>
      <p>
        The United Nations Sustainable Development Goals (SDGs) are a global blueprint for peace and prosperity for people
        and the planet, now and into the future. There are 17 interlinked global goals designed to be a "blueprint to achieve a
        better and more sustainable future for all."
      </p>

      <h2>Here are the 17 SDGs:</h2>
      <ol className="sdg-list">
        <li><FaHandHoldingUsd className="sdg-icon" /> End poverty in all its forms everywhere.</li>
        <li><FaSeedling className="sdg-icon" /> End hunger, achieve food security, improve nutrition, and promote sustainable agriculture.</li>
        <li><FaHeartbeat className="sdg-icon" /> Ensure healthy lives and promote well-being for all at all ages.</li>
        <li><FaGraduationCap className="sdg-icon" /> Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</li>
        <li><FaFemale className="sdg-icon" /> Achieve gender equality and empower all women and girls.</li>
        <li><FaTint className="sdg-icon" /> Ensure availability and sustainable management of water and sanitation for all.</li>
        <li><FaBolt className="sdg-icon" /> Ensure access to affordable, reliable, sustainable, and modern energy for all.</li>
        <li><FaMoneyBillWave className="sdg-icon" /> Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.</li>
        <li><FaIndustry className="sdg-icon" /> Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.</li>
        <li><FaEquals className="sdg-icon" /> Reduce inequality within and among countries.</li>
        <li><FaCity className="sdg-icon" /> Make cities and human settlements inclusive, safe, resilient, and sustainable.</li>
        <li><FaRecycle className="sdg-icon" /> Ensure sustainable consumption and production patterns.</li>
        <li><FaCloud className="sdg-icon" /> Take urgent action to combat climate change and its impacts.</li>
        <li><FaFish className="sdg-icon" /> Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.</li>
        <li><FaTree className="sdg-icon" /> Protect, restore, and promote sustainable use of terrestrial ecosystems, manage forests sustainably, combat desertification, halt and reverse land degradation, and halt biodiversity loss.</li>
        <li><FaBalanceScale className="sdg-icon" /> Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.</li>
        <li><FaHandsHelping className="sdg-icon" /> Strengthen the means of implementation and revitalize the global partnership for sustainable development.</li>
      </ol>
    </div>
  );
}

export default SustainableDevelopmentGoalsPage;
