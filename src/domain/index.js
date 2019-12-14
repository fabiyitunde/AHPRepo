import {
  buildmatrixmaker,
  buildmatrixdataloader,
  buildmatrixcolumnsumcalculator,
  buildMatrixSymetricValueFactory,
  buildMatrixNormalizationFactory,
  buildMatrixRowsNormalizedSumcalculator
} from './matrixmaker';
import makeId from '../Id/index';
import caseStudyFactory from './caseStudy';
import caseStudyElementFactory from './caseStudyElement';
import caseStudyInputFactory from './caseStudyInput';
import caseStudyIntensityFactory from './caseStudyIntensity';
import caseStudyInputResultFactory from './caseStudyInputResult';

const matrixmaker = buildmatrixmaker()
const matrixdataloader = buildmatrixdataloader()
const matrixcolumnsumcalculator = buildmatrixcolumnsumcalculator()
const matrixSymetricValueFactory = buildMatrixSymetricValueFactory()
const matrixNormalizationFactory = buildMatrixNormalizationFactory()
const matrixRowsNormalizedSumcalculator = buildMatrixRowsNormalizedSumcalculator()
const caseStudy = caseStudyFactory({ makeId })
const caseStudyElement = caseStudyElementFactory({ makeId })
const caseStudyInput = caseStudyInputFactory({ makeId })
const caseStudyIntensity = caseStudyIntensityFactory({ makeId })
const caseStudyInputResult = caseStudyInputResultFactory({ makeId })
export {
  matrixmaker,
  matrixdataloader,
  matrixcolumnsumcalculator,
  matrixSymetricValueFactory,
  matrixNormalizationFactory,
  matrixRowsNormalizedSumcalculator,
  caseStudy,
  caseStudyElement,
  caseStudyInput,
  caseStudyIntensity,
  caseStudyInputResult
}
