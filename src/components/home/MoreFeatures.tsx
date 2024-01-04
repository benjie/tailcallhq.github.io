import React from "react"

import {moreFeatures} from "@site/src/constants"
import Button from "../shared/Button"
import {analyticsHandler} from "@site/src/utils"

const FeatureBox = ({feature}) => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--ifm-color-gray-400)",
      }}
      className="flex flex-col sm:flex-row items-start justify-start sm:items-center text-start space-y-2 sm:space-y-0 py-4 sm:py-8 lg:py-12 sm:space-x-4 text-content-tiny font-bold sm:text-title-small lg:text-title-medium text-tailCall-dark-500  sm:h-32 w-full border border-tailCall-dark-300"
    >
      <feature.logo className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      <span className="mt-0">{feature.title}</span>
    </div>
  )
}

const MoreFeatures = () => {
  return (
    <section className="w-full mb-8 sm:mb-20">
      <div className="max-w-7xl mx-4 sm:mx-10 lg:mx-auto text-center flex flex-col items-center">
        <h5 className="text-title-semi-large sm:text-display-tiny lg:text-display-small text-tailCall-dark-500">
          There’s so much more.
        </h5>
        <div className="grid grid-cols-2 my-4 sm:my-10 lg:my-16 gap-x-6 sm:gap-x-10">
          {moreFeatures.map((feature) => (
            <FeatureBox feature={feature} key={feature.id} />
          ))}
        </div>
        <div className="sm:hidden">
          <Button title="View More" onClick={() => analyticsHandler("Home Page", "Click", "View More")} href="/enterprise/" theme="light" width="300px" />
        </div>
        <div className="hidden sm:block">
          <Button title="View More" onClick={() => analyticsHandler("Home Page", "Click", "View More")} href="/enterprise/" theme="light" width="500px" />
        </div>
      </div>
    </section>
  )
}

export default MoreFeatures
