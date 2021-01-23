import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { isValid, isAfter, subDays } from 'date-fns'

const validationSchema = yup.object().shape({
  title: yup.string().required('Поле не должно быть пустым'),
  groups: yup.string().required('Поле не должно быть пустым'),
  curators: yup.string().required('Поле не должно быть пустым'),
  deadline: yup
    .string()
    .required('Поле не должно быть пустым')
    .min(8, 'Неправильный фомат даты')
    .test('deadline', 'Неcуществуюшая дата', value => {
      const [dd, mm, yy] = value.split('.')
      return isValid(new Date(`${mm}.${dd}.${yy}`))
    })
    .test('deadline', 'Нельзя указывать прошедшую дату', value => {
      const [dd, mm, yy] = value.split('.')
      return isAfter(new Date(`${mm}.${dd}.${yy}`), subDays(new Date(), 1))
    }),
  quantity: yup.string().required('Поле не должно быть пустым'),
  options: yup.string().required('Поле не должно быть пустым'),
  description: yup
    .string()
    .when('descriptionFile', (value, schema) =>
      value.length === 0 ? yup.string().required('Поле не должно быть пустым или загрузите файл') : schema
    ),
  comment: yup
    .string()
    .when('commentToggle', (value, schema) => (value ? yup.string().required('Поле не должно быть пустым') : schema)),
  fields: yup.array().of(yup.object().shape({ title: yup.string().required('Поле не должно быть пустым') })),
  criteriaGroups: yup.array().of(
    yup.object().shape({
      title: yup.string().required('Поле не должно быть пустым'),
      criteria: yup.array().of(
        yup.object().shape({
          title: yup.string().required('Поле не должно быть пустым'),
          max: yup.string().required('Поле не должно быть пустым'),
        })
      ),
    })
  ),
  marks: yup.array().of(
    yup.object().shape({
      max: yup.string().required('Поле не должно быть пустым'),
      min: yup.string().required('Поле не должно быть пустым'),
    })
  ),
})

export default yupResolver(validationSchema)
