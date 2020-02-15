function getFormattedDate(data) {

    const maxTs = Math.max(...data.map((i) => i.time));
    const date = new Date(maxTs / 1000000);

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    return "\"" + date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec + "\"";
}

function transformToTeslaFi(dataFrame, vehicleId) {
    const [chargeState, climateState, driveState, vehicleState] = dataFrame.data;
    return {
        data_id: dataFrame.id,
        Date: getFormattedDate(dataFrame.data),
        calendar_enabled: 'True',
        remote_start_enabled: 'True',
        vehicle_id: vehicleId,
        display_name: vehicleState.display_name,
        color: 'None',
        backseat_token: 'None',
        notifications_enabled: 'True',
        vin: vehicleState.vin,
        backseat_token_updated_at: 'None',
        id: '999999999999999',
        tokens: '',
        id_s: '999999999999999',
        state: vehicleState.state,
        user_charge_enable_request: chargeState.user_charge_enable_request || 'None',
        time_to_full_charge: parseFloat(chargeState.time_to_full_charge).toFixed(1),
        charge_current_request: chargeState.charge_current_request,
        charge_enable_request: chargeState.charge_enable_request,
        charge_to_max_range: chargeState.charge_to_max_range,
        charger_phases: chargeState.charger_phases || 'None',
        battery_heater_on: chargeState.battery_heater_on || 'False',
        managed_charging_start_time: chargeState.managed_charging_start_time || 'None',
        battery_range: chargeState.battery_range,
        charger_power: chargeState.charger_power,
        charge_limit_soc: chargeState.charge_limit_soc,
        charger_pilot_current: chargeState.charger_pilot_current,
        charge_port_latch: chargeState.charge_port_latch || 'Engaged',
        battery_current: '0.0',
        charger_actual_current: chargeState.charger_actual_current || '0',
        scheduled_charging_pending: chargeState.scheduled_charging_pending,
        fast_charger_type: chargeState.fast_charger_type,
        usable_battery_level: chargeState.usable_battery_level,
        motorized_charge_port: 'True',
        charge_limit_soc_std: chargeState.charge_limit_soc_std,
        not_enough_power_to_heat: 'False',
        battery_level: chargeState.battery_level,
        charge_energy_added: chargeState.charge_energy_added,
        charge_port_door_open: chargeState.charge_port_door_open,
        max_range_charge_counter: chargeState.max_range_charge_counter,
        charge_limit_soc_max: chargeState.charge_limit_soc_max,
        ideal_battery_range: chargeState.ideal_battery_range,
        managed_charging_active: chargeState.managed_charging_active,
        charging_state: chargeState.charging_state,
        fast_charger_present: chargeState.fast_charger_present,
        trip_charging: chargeState.trip_charging,
        managed_charging_user_canceled: chargeState.managed_charging_user_canceled,
        scheduled_charging_start_time: chargeState.scheduled_charging_start_time || '0',
        est_battery_range: chargeState.est_battery_range,
        charge_rate: chargeState.charge_rate,
        charger_voltage: chargeState.charger_voltage || '0',
        charge_current_request_max: chargeState.charge_current_request_max,
        eu_vehicle: 'True',
        charge_miles_added_ideal: chargeState.charge_miles_added_ideal,
        charge_limit_soc_min: chargeState.charge_limit_soc_min,
        charge_miles_added_rated: chargeState.charge_miles_added_rated,
        inside_temp: climateState.inside_temp,
        longitude: driveState.longitude,
        heading: driveState.heading,
        gps_as_of: Math.round(parseInt(driveState.time) / 1000000000),
        latitude: driveState.latitude,
        speed: driveState.speed || 'None',
        shift_state: driveState.shift_state || 'None',
        seat_heater_rear_right: climateState.seat_heater_rear_right || '0',
        seat_heater_rear_left_back: climateState.seat_heater_rear_left_back || '0',
        seat_heater_left: climateState.seat_heater_left || '0',
        passenger_temp_setting: parseFloat(climateState.passenger_temp_setting).toFixed(1),
        is_auto_conditioning_on: climateState.is_auto_conditioning_on,
        driver_temp_setting: parseFloat(climateState.driver_temp_setting).toFixed(1),
        outside_temp: parseFloat(climateState.outside_temp).toFixed(1),
        seat_heater_rear_center: climateState.seat_heater_rear_center,
        is_rear_defroster_on: climateState.is_rear_defroster_on,
        seat_heater_rear_right_back: climateState.seat_heater_rear_right_back || '0',
        smart_preconditioning: climateState.smart_preconditioning,
        seat_heater_right: climateState.seat_heater_right,
        fan_status: climateState.fan_status,
        is_front_defroster_on: "3", // WTF? climateState.is_front_defroster_on,
        seat_heater_rear_left: climateState.seat_heater_rear_left,
        gui_charge_rate_units: 'kW',
        gui_24_hour_time: 'True',
        gui_temperature_units: 'C',
        gui_range_display: 'Rated',
        gui_distance_units: 'km/hr',
        sun_roof_installed: '1',
        rhd: 'False',
        remote_start_supported: vehicleState.remote_start_supported,
        homelink_nearby: vehicleState.homelink_nearby,
        parsed_calendar_supported: 'True',
        spoiler_type: 'None',
        ft: vehicleState.ft,
        odometer: vehicleState.odometer,
        remote_start: vehicleState.remote_start,
        pr: vehicleState.pr,
        has_spoiler: 'False',
        roof_color: 'None',
        perf_config: 'P1',
        valet_mode: vehicleState.valet_mode,
        calendar_supported: vehicleState.calendar_supported,
        pf: vehicleState.pf,
        sun_roof_percent_open: '0',
        third_row_seats: 'None',
        seat_type: '1',
        api_version: vehicleState.api_version,
        rear_seat_heaters: '0',
        rt: vehicleState.rt,
        exterior_color: 'Black',
        df: vehicleState.df,
        autopark_state: vehicleState.autopark_state || 'disabled',
        sun_roof_state: 'unknown',
        notifications_supported: 'True',
        vehicle_name: vehicleState.display_name,
        dr: vehicleState.dr,
        autopark_style: vehicleState.autopark_style,
        car_type: 's',
        wheel_type: 'Base19',
        locked: vehicleState.locked,
        center_display_state: vehicleState.center_display_state,
        last_autopark_error: vehicleState.last_autopark_error,
        car_version: vehicleState.car_version,
        dark_rims: 'False',
        autopark_state_v2: vehicleState.autopark_state_v2,
        inside_tempF: '',
        driver_temp_settingF: '',
        outside_tempF: '',
        odometerF: '', //''ehicleState.odometer / 1.60934,
        idleNumber: '0',
        sleepNumber: '0',
        driveNumber: '0',
        chargeNumber: '0',
        polling: '',
        idleTime: '0',
        running: '0',
        rerunning: '0',
        maxRange: '',
        left_temp_direction: '',
        max_avail_temp: '',
        is_climate_on: climateState.is_climate_on,
        right_temp_direction: '',
        min_avail_temp: '',
        rear_seat_type: '',
        power: driveState.power,
        steering_wheel_heater: 'False',
        wiper_blade_heater: 'False',
        side_mirror_heaters: 'False',
        elevation: ''
    }
}

module.exports = transformToTeslaFi
