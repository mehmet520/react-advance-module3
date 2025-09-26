import DataSource from '../data/DataSource'

const selectComments = () => {
  return DataSource.getComments()
}

export default selectComments
