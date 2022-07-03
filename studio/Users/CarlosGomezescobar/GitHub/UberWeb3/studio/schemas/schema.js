
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import { userSchema } from './userSchema'
import { ridesSchema } from './ridesSchema'
import { tripSchema } from './tripSchema'
import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'


export default createSchema({
 
  name: 'default',
  
  types: schemaTypes.concat([
    
    userSchema,
    ridesSchema,
    tripSchema,
    movie,
    person,
    screening,
    
    blockContent,
    plotSummary,
    plotSummaries,
    castMember,
    crewMember,
  ]),
})
