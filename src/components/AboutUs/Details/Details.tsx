import React from 'react'
import DetailsSection from './DetailsSection'
import { details } from './details.dt'
import Container from '@/components/Reusable/Container/Container'

const Details = () => {
  return (
    <Container>
        <div className="space-y-4">
      {details.map((item, index) => (
        <DetailsSection
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
    </Container>
     
  )
}

export default Details