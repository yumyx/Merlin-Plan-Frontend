import {findIndex, forEach, cloneDeep} from 'lodash';

export default function resources(state = { accessableScenarios:[], financialPartitions:{}, scenarioData:{}, chartData:{} }, action) {
  switch (action.type) {
    case 'SET_ACCESSABLE_SCENARIOS':
      return Object.assign({},state,{accessableScenarios:action.scenarios})
    case 'ADD_SCENARIO_DATA': {
      let newDataObject = {
        scenarioData:{
        }
      }
      newDataObject.scenarioData[action.id] = action.data
      return Object.assign({},state,newDataObject)
    }
    case 'SET_FINANCIAL_SCENARIO_CHART_DATA': {
      let newDataChartObject = {
        chartData:{
        }
      }
      newDataChartObject.chartData[action.id] = action.data
      return Object.assign({},state,newDataChartObject)
    }
    case 'UPDATE_FINANCIAL_RESOURCE': {
      let financialResources = state.scenarioData[action.resourceScenarioId].financialResources
      let resourceToUpdateIndex = findIndex( financialResources, financialResource => (financialResource.id === action.id) )
      let updatedFinancialResources = [...financialResources.slice(0,resourceToUpdateIndex), action.updatedFinancialResource,...financialResources.slice(resourceToUpdateIndex+1)]
      let updatedScenarioData = {}
      updatedScenarioData[action.resourceScenarioId] = Object.assign({}, state.scenarioData[action.resourceScenarioId], {financialResources:updatedFinancialResources})
      let updatedScenarioDataList = Object.assign({}, state.scenarioData, updatedScenarioData)
      return Object.assign({},state,{scenarioData:updatedScenarioDataList})
    }
    case 'SET_FINANCIAL_PARTITIONS': {
    let newPartionsObject = {
        financialPartitions:{
        }
      }
      newPartionsObject.financialPartitions[action.scenarioId] = action.financialPartitions
      return Object.assign({},state,newPartionsObject)
    }
    default:
      return state;
  }
}